//priority: 100

//Manager for the Unification Module system
/*
    created to help ease of Ore Unification in MC Eternal 2
    
    As a convention, any given moduleGroup for a mod and its recipetypes should be in its own file, for ease of disabling if necessary.

    To Use:
        - initialize a new Group using "createModule(string name)"
        - call ".subscribe()" on that Group, and pass a a Material Category name, and a function that takes three arguments.
            - the first argument is the RecipeEventJS
            - the second is the Material's name
            - the third is the preferred product for that materialType
        - from there, the function will be called once for each product in the provided Category.
            - see "startup_scripts/ore_processing_setup.js", and the "global.preferredOreProducts" object in it if you need a reference.
            - if you need to reference other types of products, call "global.preferredOreProducts.TYPE[material]", where TYPE is the category you need to reference.
*/


//Example of an individual moduleGroup and its object
/* 
    occultism: {
        ore_gem: (event) => {
            //...
        },
        raw_material: (event) => {
            //...
        }
    }
*/

const modules = {}

/**
 * Should never need to be called. use `modules.[groupName].subscribe(materialType, module)` instead
 * @param {String} group Group to add the Module to
 * @param {String} materialType Material Type that will be passed in later
 * @param {Function} module 
 */
const subscribeToGroup = (group, materialType, module) => {
    let moduleGroup = modules[group]
    if(moduleGroup) {
        if(moduleGroup[materialType])
            console.warn(`Module "${materialType}" already exists for group "${group}"!`)
        else 
            moduleGroup[materialType] = module
    } else
        console.warn(`No Module Group "${group}" is initialized.`)
}

/**
 * 
 * @param {String} groupName Name of the new Module Group
 * @returns a new Module, using the passed groupName as its key
 */
const createModule = (groupName) => {
    modules[groupName] = {
        subscribe: (materialType, module) => subscribeToGroup(groupName, materialType, module)
    }
    return modules[groupName]
}

//Load Modules
ServerEvents.recipes(event => {

    for (let [moduleGroup, moduleList] of Object.entries(modules)) {
        console.log(`Resolving Ore Unification modules for "${moduleGroup}"`)
        if(moduleList.first) {
            moduleList.first(event) //run "first" module
            delete moduleList.first //then remove it to prevent it again later
        }
        // remove subscribe function from this module.
        delete moduleList.subscribe
        // then run the module.
        for (let [materialType, module] of Object.entries(moduleList)) {
            console.log(`Resolving module "${materialType}"`)
            for (let [material, product] of Object.entries(global.preferredOreProducts[materialType]))
                module(event, material, product)
            console.log(`Finished resolving module "${materialType}"`)
        }
    }
})
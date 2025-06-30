# Nome do arquivo original
input_file = "en_us.json"

# Lê o conteúdo do arquivo
with open(input_file, "r", encoding="utf-8") as f:
    lines = f.readlines()

# Tamanho do bloco
block_size = 1000

# Divide o conteúdo em blocos e salva cada um em um novo arquivo
for i in range(0, len(lines), block_size):
    block = lines[i:i + block_size]
    output_file = f"en_us_part_{i // block_size + 1}.json"
    with open(output_file, "w", encoding="utf-8") as f:
        f.writelines(block)
    print(f"Bloco salvo: {output_file}")

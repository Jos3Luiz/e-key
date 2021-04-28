import sqlite3

conn = sqlite3.connect('devices.db')

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE devices (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        auth  BOOLEAN DEFAULT 0,
        pending  BOOLEAN DEFAULT 0
);
"""
)
print('Tabela 1 criada com sucesso.')
cursor.execute("""
CREATE TABLE logs (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        idDevice INTEGER NOT NULL,
        entrou VARCHAR(1) NOT NULL,
        direcao VARCHAR(1) NOT NULL,
        momento DATETIME NOT NULL,
        FOREIGN KEY(idDevice) REFERENCES devices(id)
);
"""
)


print('Tabela 2 criada com sucesso.')
conn.close()
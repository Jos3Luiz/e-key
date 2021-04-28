import sqlite3



class devices: #add tratamento para quando não acha ID
    def __init__(self,name='',auth=0,pending=1):
        self.conn = sqlite3.connect('devices.db')
        self.cursor = self.conn.cursor()
        self.name = name
        self.auth = auth
        self.pending = pending
        self.id = 0

    def verificarDevice(self,id):
        if(type( id ) == int):
            try:
                self.cursor.execute("""
                SELECT * FROM devices WHERE id = ?
                """, (str(id),))
                txt = ''
                for linha in self.cursor.fetchall():
                    txt += str(linha)
                if (txt==''):
                    return False
            except:
                return False
        else:
            return False
        return True
    def inserirDevice(self,device):
        if(type( device ) == devices):
            if not(self.verificarDevice(self.id)):
                self.cursor.execute("""
                INSERT INTO devices (nome, auth,pending)
                VALUES (?,?,?);
                """, (device.name,device.auth,device.pending))
                self.conn.commit()
                self.cursor.execute("""
                SELECT COUNT(*) FROM devices
                """)
                numero = 0
                for linha in self.cursor.fetchall():
                    numero = int(linha[0])
                self.id = numero
            return True
        else:
            return False
            
    def lerDevice(self,id):
        retorno = []
        
        if(type( id ) == int):
            ent = str(id)
            self.cursor.execute("""
            SELECT * FROM devices WHERE id = ?;
            """, (ent,))

            
            for linha in self.cursor.fetchall():
                retorno.append(linha)

            return True, retorno
        else:
            return False, retorno
        
    def alterarDevice(self,id,device):
        if(type( id ) == int) and (type( device ) == devices):
            if (self.verificarDevice(id)):
                self.cursor.execute("""
                UPDATE devices
                set nome = ?, auth = ?, pending = ?
                where id = ? 
                """, (device.name,device.auth,device.pending,id,))
                self.conn.commit()
                return True
            else:
                return False
        else:
            return False

    
    def removerDevice(self,id):
        if(type( id ) == int):
            self.cursor.execute("""
            DELETE FROM devices
            WHERE id = ?
            """, (id,))
            txt = ''
            for linha in self.cursor.fetchall():
                txt += str(linha[0])
            print(txt)
            self.conn.commit()
            if(txt==''):
                return False            
            return True
        return False;

    def listarDevices(self):
        self.cursor.execute("""
        SELECT * FROM devices
        """)
        retorno = []

        for linha in self.cursor.fetchall():
            retorno.append(linha)

        return retorno

    def __del__(self):
        self.conn.close()

class logs:
    def __init__(self,idDevice,entrou,direcao,momento):
        self.conn = sqlite3.connect('devices.db')
        self.cursor = self.conn.cursor()
        self.idDevice = idDevice
        self.entrou = entrou
        self.direcao = direcao
        self.momento = momento


def carregarDevices():
    listDevice = []


    return listDevice
#!/usr/bin/python3
from front import admin

commands = ['help','testServer','listDevices','statusDevice','authorize','seeLogs','exit']

stayInProgram = True
exit = len(commands) -1

manager = admin()

while stayInProgram :
    wait = True
    i=0

    print("List of commands:\n\n")
    while (i <= exit):
        print (str(i) + " - " + commands[i])
        i+=1
    print ("\n")

    command = exit;

    try : 
        command = int(input('Enter the number of command:'))
        if (command<0) or (command>exit):
            raise Exception("The input is not validated\n")
    except Exception as e:
        print(e)
        command = exit        


    print ("The command selected is: " + commands[command])

    if (command == 0): #help
        print (
        "\n\nEste programa é um administrador para um sistema de controle de acesso a um local via cards."  + "\n\n" +
        "0 - help: describe the program and the commands of program " "\n" +
        "1 - testServer: tests the connection to the server."  + "\n" +
        "2 - listDevices: list full Devices." + "\n" + 
        "3 - statusDevice: describe the status of Device indicated." + "\n" + 
        "4 - authorize: Gerencia autorização e pendencia de um Device" + "\n" + 
        "5 - seeLogs: Display full logs" + "\n" + 
        "6 - exit: Program execution ends" + "\n" + 
        ""
        )
    
    elif (command == 1): #testServer
        try:
            if not(manager.testServer()):
                raise Exception("server not found")
        except Exception as e:
            print(e)

    elif (command == 2): #listDevices
        try:
            if not (manager.listDevices()):
               raise Exception("server not found")
        except Exception as e:
            print(e)

    
    elif (command == 3): #statusDevice
        try:
            if not (manager.testServer()):
                raise Exception("server not found")

            client = input("What Device?")
            print("\n")
            if client.isdigit() == False:
                raise Exception("ID is number!")
            client = int(client)

            if not (manager.statusDevice(client)):
                raise Exception("Device not found")

        except Exception as e:
            print(e)


    elif (command == 4): #authorizeDevice
        try:
            if not (manager.testServer()):
                raise Exception("server not found")
            
            client = input("What Device?")
            print("\n")
            if client.isdigit() == False:
                raise Exception("ID is number!")
            client = int(client)

            if not (manager.statusDevice(client)):
                raise Exception("Device not found")

            authorization = input("Give authorization?[y for yes/n for not, defaut is not]")
            print("\n")
            if (authorization=='y'):
                authorization = True
            else:
                authorization = False

            pendency= input("Remove the pendency?[y for yes/n for not, defaut is not]")
            if (pendency=='y'):
                pendency = True
            else:
                pendency = False

            print("\n")

            if not (manager.authorize(client,authorization,pendency)):
                raise Exception("failed to change")
        except Exception as e:
            print(e)
    elif (command == 5): #seeLogs
        try:
            if not(manager.testServer()):
                raise Exception("server not found")
            if not(manager.seeLogs()):
                raise Exception("database inaccessible ")
        except Exception as e:
            print(e)
    
    elif (command == exit): #exit
        stayInProgram = False
        wait = False
    
    else: #comando não descrito, nao deveria acontecer
        stayInProgram = False
        wait = False

    if (wait):
        input("\nPress enter for the next command")
        wait = False
    else:
        print("Finish the program.")
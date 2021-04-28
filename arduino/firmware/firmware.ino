#include <SPI.h>
#include <MFRC522.h>

 
#define SS_PIN 10
#define RST_PIN 9
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.
 
#define LED_OK 7
#define LED_FAIL 8
#define LED_WARN 6

#define PENDING 0
#define APPROVED 1
#define BLOCKED 2


void setup() 
{
  Serial.begin(9600);   // Inicia a serial
  SPI.begin();      // Inicia  SPI bus
  mfrc522.PCD_Init();   // Inicia MFRC522
  pinMode(LED_OK, OUTPUT);
  pinMode(LED_FAIL, OUTPUT);
}

void openDoor(){
}

void blink(int led,int times,int dly ){
  for(int i=0;i<times;i++){
    digitalWrite(led, HIGH);   
    delay(dly/2);              
    digitalWrite(led, LOW);   
    delay(dly);      
  }

}

bool auth(){
    int result = Serial.read();
    while(result==-1){
      result = Serial.read();
    }
    if (result==APPROVED){
      blink(LED_OK,2,500);
      return true;
    }
    else if(result==PENDING){
      blink(LED_FAIL,2,500);
      return false;
    
    }
    else{
      blink(LED_FAIL,15,200);
      return false;
    }
   
}
void loop() 
{
  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
  //Mostra UID na serial
  String conteudo= "";
  byte letra;
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? "0" : "");
     Serial.print(mfrc522.uid.uidByte[i], HEX);
  }
  Serial.println();
  digitalWrite(LED_WARN, HIGH); 
  bool authenticated = auth();
  if (authenticated){
    openDoor();
  }
  delay(500);
  digitalWrite(LED_WARN, LOW); 

} 

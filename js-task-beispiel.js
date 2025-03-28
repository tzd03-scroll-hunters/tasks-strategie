/**
  Gegeben ist eine Liste von Früchten.
  Beispiel: const früchte = [
   { name: "Apfel", sweet: true },
   { name: "Zitrone", sweet: false },
   { name: "Banane", sweet: true }, 
   { name: "Limette", sweet: false } 
   { name: "Kirsche", sweet: true }, 
   ]

   Schreibe eine Funktion, die alle Früchte, die süß sind, in einem Array zurückgibt.
   Gebe die Liste am Ende im Terminal aus.
*/

/**
 * Steps: Von Task zu CODE 
 * 
 * Kläre INPUT und OUTPUT als erstes!
 * 
 * INPUT: ARRAY => ARRAY von Objects
 * OUTPUT: ARRAY => ARRAY von Objects (nur die Früchte, die süß sind)
 * 
 * LOGIK: Oder wie komme ich INPUT zu OUTPUT??
 * 
 * Step 1: Von einem Array zu einem anderen Array 
 * => ich soll etwas mit einem Array machen. Dann brauche ich zu 99% eine LOOP!
 * 
 * Möglichkeiten für Array Loops:
 * - Suche => find oder filter
 * - Suche ein Item und update es => find
 * - Format von allen ändern => map
 * - Alle updaten => forEach
 * 
 * Herausfinden der Loop:
 * Frage: Soll ich GENAUSO viele OUTPUT Items generieren wie ich INPUT Items habe?
 * => Antwort: NEIN. Es sollen WENIGER Items sein!
 * => Suchen wir nur EIN Item? Nein, wir bekommen vielleicht nur eins, eventuell aber auch mehrere. 
 * => Loop die wir also nutzen können: FILTER
 * 
 * Von LOGIK zu CODE in Steps:
 * 
 * Text 1: WAS SOLL in LOOP passieren / WAS PRÜFE ICH BEI JEDME ITEM?
 * Text 2: Für jedes INPUT Item CHECKE ob es süß / sweet ist
 * Text 3: ITERATE OVER EACH item und CHECKE IF es süß ist. Wenn JA: Nehmen wir! Wenn nein: Ignorieren
 * 
 * PSEUDO code
 * items.filter => check and return for each item if sweet
 * 
 * FINAL code
 * items.filter((item) => item.sweet )
 */



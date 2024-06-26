package com.betrybe.rpg;

public class Main {

  public static void main(String[] args) {
    Warrior warrior = new Warrior();
    warrior.setName("Aragorn");
    warrior.setWeapon("Espada");
    warrior.setRace("Humano");

    System.out.println(warrior.getName() + " é da raça " + warrior.getRace() + " e utiliza " + warrior.getWeapon());

    warrior.specialAttack();
//    warrior.move();
//    warrior.attack();

    Mage mage = new Mage();
//    mage.move();
//    mage.attack();

    moveAndAttack(warrior);
    moveAndAttack(mage);

    Barbarian barbarian = new Barbarian();
    barbarian.move();

    Cleric cleric = new Cleric();
    cleric.heal();
    cleric.heal("Poção de vida");
    cleric.heal("Feitiço de luz", 7);
  }

  public static void moveAndAttack (PlayableCharacter player) {
    player.move();
    player.attack();
  }

}

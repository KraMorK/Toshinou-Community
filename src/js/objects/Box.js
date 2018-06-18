/*
Created by Freshek on 07.10.2017
*/

class Box extends Movable {
  constructor(x, y, hash, type) {
    super(x, y);
    this.hash = hash;
    this.type = type;
  }

  toString() {
    return JSON.parse(this);
  }

  isMaterial() {
    var type = this.type.toLowerCase();
    return (type == "mucosum" || type == "prismatium" || type == "scrapium" || type == "boltrum");
  }

  isCollectable() {
    var type = this.type;
    return (type == "BONUS_BOX" || type == "MINI_PUMPKIN" || type == "TURKISH_FLAG" || type == "GIFT_BOXES" || type == "ICY_BOX"  || type == "YURIS_BONUS_BOX" || type == "MAYHEM_BOX");
  }
}
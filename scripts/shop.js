const InventoryItems = {
  "starskin": {StyleToken: 0},
  "suit": {StyleToken: 0},
  "ninja": {StyleToken: 0},
  "knight": {StyleToken: 0},
  "underwear": {StyleToken: 0},
  "ghaster": {StyleToken: 0},
  "gd1": {StyleToken: 0},
  "elegant": {StyleToken: 0},
  "orboskin": {StyleToken: 0},
  "love": {StyleToken: 0},
  "backpacker": {Season2Token: 0, StyleToken: 0},
  "pencil": {Season2Token: 0, StyleToken: 0},
  "nerd": {EliteSeason2Token: 0, StyleToken: 0},
  "eraser": {EliteSeason2Token: 0, StyleToken: 0},
  "wetsuit": {SeasonToken: 0},
  "lifeguard": {SeasonToken: 0},
  "bikini": {SeasonToken: 0},
  "diving": {SeasonToken: 0}
};

function tryBuy(itemName, allowMultiple = false) {
  if (!checkReqs(InventoryItems[itemName]) && !(itemName in Inventory)) return false;
  
  if (allowMultiple && (itemName in Inventory)) {
    Inventory[itemName] += 1;
  } else {
    Inventory[itemName] = 1;
  }
  localStorage.setItem('inventory', JSON.stringify(Inventory));
  syncRewards();
  return true;
}

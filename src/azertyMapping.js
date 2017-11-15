const azertyMapping = [///// LOWCASE KEYS
  { key: 'a', ascii: '97' },
  { key: 'z', ascii: '122' },
  { key: 'e', ascii: '101' },
  { key: 'r', ascii: '114' },
  { key: 't', ascii: '116' },
  { key: 'y', ascii: '121' },
  { key: 'u', ascii: '117' },
  { key: 'i', ascii: '105' },
  { key: 'o', ascii: '111' },
  { key: 'p', ascii: '112' },
  { key: 'q', ascii: '113' },
  { key: 's', ascii: '115' },
  { key: 'd', ascii: '100' },
  { key: 'f', ascii: '102' },
  { key: 'g', ascii: '103' },
  { key: 'h', ascii: '104' },
  { key: 'j', ascii: '106' },
  { key: 'k', ascii: '107' },
  { key: 'l', ascii: '108' },
  { key: 'm', ascii: '109' },
  { key: '<i class="fa fa-arrow-up" aria-hidden="true"></i>', action: 'uppercase' },
  { key: 'x', ascii: '120' },
  { key: 'w', ascii: '119' },
  { key: 'c', ascii: '99' },
  { key: 'v', ascii: '118' },
  { key: 'b', ascii: '98' },
  { key: 'n', ascii: '110' },
  { key: '', ascii: '39' },
  {
    key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>', ascii: '', action: 'backspace', class: 'backspace-key',
  },///// UPPERCASE KEYS
  { key: 'A', ascii: '65' },
  { key: 'Z', ascii: '90' },
  { key: 'E', ascii: '69' },
  { key: 'R', ascii: '82' },
  { key: 'T', ascii: '84' },
  { key: 'Y', ascii: '89' },
  { key: 'U', ascii: '85' },
  { key: 'I', ascii: '73' },
  { key: 'O', ascii: '79' },
  { key: 'P', ascii: '80' },
  { key: 'Q', ascii: '81' },
  { key: 'S', ascii: '83' },
  { key: 'D', ascii: '68' },
  { key: 'F', ascii: '70' },
  { key: 'G', ascii: '71' },
  { key: 'H', ascii: '72' },
  { key: 'J', ascii: '74' },
  { key: 'K', ascii: '75' },
  { key: 'L', ascii: '76' },
  { key: 'M', ascii: '77' },
  { key: '<i class="fa fa-arrow-up" aria-hidden="true"></i>', action: 'lowercase' },
  { key: 'X', ascii: '88' },
  { key: 'W', ascii: '87' },
  { key: 'C', ascii: '67' },
  { key: 'V', ascii: '86' },
  { key: 'B', ascii: '66' },
  { key: 'N', ascii: '78' },
  { key: '', ascii: '39' },
  {
    key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>', ascii: '', action: 'backspace', class: 'backspace-key',
  },////// COMMON KEYS
  { key: '?#!123', ascii: '', action: 'numerics_symbols' },
  { key: ',', ascii: '44' },
  { key: '', action: 'emotes' },
  { key: 'Space', ascii: '32', class: 'space-key' },
  { key: '.', ascii: '46' },
  { key: 'Enter', class: 'enter-key', action: 'enter' },
];

export default azertyMapping;

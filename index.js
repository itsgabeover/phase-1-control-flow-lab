function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride > 2500) {
    return 'No can do.'
  }
  else return 'I will gladly take your thirty bucks.';
}

function ternaryCheckCity(city){
  // Write your code here!
  city == 'NYC'? (city = 'Ok, sounds good.') : (city = 'No go.');
  return city;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      tip = 'Thank you so much.';
      break;
    case 'not as generous':
      tip = 'Thank you.';
      break;
    default:
      tip = 'Bye.';
      break;
  }
  return tip;


}
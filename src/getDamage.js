
export default function getDamange(types) {
  const {frostBolt, iceLance, forgottenTorch, fireBall, spellDamage} = types;

  let damage = 0;

  if (frostBolt) {
    damage += 3 * frostBolt;
    damage += spellDamage * frostBolt;

    damage += iceLance * 4;
    damage += iceLance * spellDamage;
  } else if (iceLance > 1) {
    damage += (iceLance - 1) * 4;
    damage += (iceLance - 1) * spellDamage;
  }

  damage += fireBall * 6 + fireBall * spellDamage;
  damage += forgottenTorch * 6 + forgottenTorch * spellDamage;

  return damage;
};


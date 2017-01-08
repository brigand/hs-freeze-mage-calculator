import getDamage from '../getDamage';

it('works for 0', () => {
  const res = getDamage({
    frostBolt: 0,
    iceLance: 0,
    forgottenTorch: 0,
    fireBall: 0,
    spellDamage: 0,
  });
  expect(res).toBe(0);
});


it('works for real case', () => {
  const res = getDamage({
    frostBolt: 2,
    iceLance: 2,
    forgottenTorch: 1,
    fireBall: 2,
    spellDamage: 0,
  });
  expect(res).toBe(29);
});


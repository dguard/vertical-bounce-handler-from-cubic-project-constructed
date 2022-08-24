

// keep

// let me draw entire scene
let spawnedPointerBelongingsAtEntire = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 4 * 1 * 1.9, 5 * 1 + 2 + 2 + 2 + 2 + 2 + 2, 1)
let knotEntire = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1 * 4 * 1.4, 5 * 1, 4 * 1 * 1.7)
pencil.useKnot(knotEntire)

// keep
pencil.useSpawn(spawnedPointerBelongingsAtEntire)

pencil.draw()
// keep
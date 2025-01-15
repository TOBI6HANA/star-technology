ServerEvents.recipes(event => {

    event.recipes.gtceu.exotic_gas_siphon("overworld")
        .circuit(1)
        .outputFluids("gtceu:nitrogen 140000")
        .outputFluids("gtceu:oxygen 44000")
        .outputFluids("gtceu:carbon_dioxide 10000")
        .outputFluids("gtceu:helium 4000")
        .outputFluids("gtceu:argon 2000")
        .dimension("minecraft:overworld")
        .duration(1000).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.exotic_gas_siphon("abydos")
        .circuit(2)
        .outputFluids("gtceu:helium 20000")
        .outputFluids("gtceu:argon 15000")
        .outputFluids("gtceu:nitrogen 125000")
        .outputFluids("gtceu:oxygen 10000")
        .outputFluids("gtceu:neon 5000")
        .outputFluids("gtceu:radon 5000")
        .outputFluids("gtceu:tritium 10000")
        .outputFluids("gtceu:krypton 5000")
        .outputFluids("gtceu:xenon 5000")
        .outputFluids("gtceu:deuterium 50000")
        .dimension("sgjourney:abydos")
        .duration(1000).EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.exotic_gas_siphon("nether")
        .circuit(3)
        .outputFluids("gtceu:sulfur_dioxide 15000")
        .outputFluids("gtceu:helium_3 5000")
        .outputFluids("gtceu:neon 1000")
        .outputFluids("gtceu:carbon_monoxide 144000")
        .outputFluids("gtceu:coal_gas 20000")
        .outputFluids("gtceu:hydrogen_sulfide 15000")
        .dimension("minecraft:the_nether")
        .duration(1000).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.exotic_gas_siphon("end")
        .circuit(4)
        .outputFluids("gtceu:radon 1000")
        .outputFluids("gtceu:tritium 10000")
        .outputFluids("gtceu:krypton 1000")
        .outputFluids("gtceu:xenon 1000")
        .outputFluids("gtceu:nitrogen_dioxide 122000")
        .outputFluids("gtceu:deuterium 50000")
        .outputFluids("gtceu:helium 15000")
        .dimension("minecraft:the_end")
        .duration(1000).EUt(GTValues.VA[GTValues.ZPM])
});
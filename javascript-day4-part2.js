function findXmas(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let xmasCount = 0;

    // Potential X centers
    for (let r = 1; r < rows - 1; r++) {
        for (let c = 1; c < cols - 1; c++) {
            // Check all 4 possible X-MAS patterns
            const patterns = [
                // Pattern 1: Diagonal from top left
                [grid[r-1][c-1], grid[r][c], grid[r+1][c+1]],
                // Pattern 2: Diagonal from top right
                [grid[r-1][c+1], grid[r][c], grid[r+1][c-1]]
            ];

            for (const pattern of patterns) {
                // Check forward and backward for each letter sequence
                const letterSeqs = [
                    ['M', 'A', 'S'],
                    ['S', 'A', 'M']
                ];
                
                for (const seq of letterSeqs) {
                    // Check if current diagonals match the sequence
                    if (seq.every((s, i) => pattern[i] === s)) {
                        xmasCount++;
                    }
                }
            }
        }
    }

    return xmasCount;
}


// Placeholder for actual puzzle input
const grid = `SMXMMAXXXXMMMMSMMASASMSXMMAMSSMXSMMXMASAMXXMAMXAXXAMXAXASMSMSMMMSXXSXSXXAAMXXSXMASMAASXMXMSSMXXXXMMSSSMXSXXMASXMMSMSXMXSSMXSMMMSXMSAMSASXSAM
MASMMSXMMMMAMSMAXSAMXAXAXXAXSASAMASMMASAMAXMAXMMSXASMMMMSAAXAAAAXSMAAAAMAMXSSMMXMASMSAMXSAAAMSMMMSMAAAMMMXMXAXASAASXASAXMASMAAXXAXMAMXXSSMAM
MAMAAMXMAXSASAMMMXAMMMMAMMSMSAMXSAMXMASAMMSXSASAMXSMAAAMMXMMSMMXMAMSSMMAAMAMAXAAXMAMXAMSAMMSMAXAAAMMSMMAAXSMMSXMSMMSAMXSXMXXMMSSMMMSMMXMASXM
MAMMMXAMXMXXSASXAXAMSXMXSAAXMMMXMXSXMXSMMXMAXAMXXXXXSSSSXAMXXAMMAMXAXAXSAMMSMMMSMMSMSAMAAXMAMXSMSXXAXMSSSSMAXSAMXMMMSXAXAXAMMXMASXAMAMSXAMMX
SSSXXSMMSMMXSAAMSSSMMXSAMMSMMMMMMASASAMASMMMMXSSSSMXMAMMMXSASAMXXXSXMMMMASXAXASAMMAAMXMSMMSMXMXXAMXXSMAMMXMAMMXAAXMAMMSSMMXXAASAMMXSAMAMSSMM
AAXMASMAAASAMXMAMMAAXXMASAXXMAAAXMSAMXSAMAMXSAAAAXAAMAMAAXAMMMMSMAXMXSASAMMMMMAASMMSMAMAXXXMASAMXSAAMXAXMASXMSASMSMMMMMAXAAXSXMASAMSAMMXMAMA
MXMMAMASMMMXSXSASXSMMMMXMMSASMSMSAMXMXMMSSMAXMMMMMSXSASMSSMXXAAAMAMXMAMMAMXXAXSXMASAXSSSSMMSASAMASMMMSMSXAXXAAXXAAMAAXSMMMSMMAMMXXAMAMXMSMMS
MMXMAXXMMMAXMXMASXAXAAMMMMSAMXAMXMMAMXMMAAMXSXMXAAAASASAAXXSSMSSSMSSMSMSXMXXSXMXAXSMMMMXMMAMXMAMAMXAMAAMMMMMSMMMSMXMSMMXMXMAMMMSMMSSXMAAAXAM
MAASMXSAXSSMSAXXMMSSSMMAAAMXMMXXAXSXSASMSSMAMASMMXSAMXMMMXSAAMMXMAMAAAAXAASMMASXSMXXAAXMMMSSMSXMSSSXSMSMASAAAXMAMSMAMAMMXASXMSAMAAAMASXSMMSS
ASAMMAMXMXAAXMSAAXAAAASMMXSAXAMXMXAAAASMXMMASAMAAAMASXXMXMASMMMAMAMMSMSSMMXASAMAMAMSSMSAXMASAAXMXAXASXMXAXASMSMASMMMSAMXSASAMMASMMSSMMAAXAAS
MMAMMMSMSSMMAAMASMMXMASAAASASMAASAMSMXMXAXSAMASMMXSAMAMXAMXXMAMXSAMAXMAMAASAMASAMAMXAASMMMAXXMXMASMXMASMXSAMAXXXXAAAMAMAMXMAMAAMXMAMXMXMMMMS
XMAMSXMAAAXSXSMAMMXXXXXMMXMMMMSAXAXAXMMMMXMASAMAAXMXSAAMSSMXSSXMMMSSSMSXXMMXSMMXSXSMMMMAAMMMMSAMAXXXXMMAAAXMXMMSXSMMXAMXSSMSMMXXXMAMAMXMAMSS
SMSMXAXMMXMSMAMASXSXSAMXMAMMSXMASMMMAAAAXAMAMXSMMSMXSXSAAAMXMMXSAAAXAAAXMMSASAMXXMXMXSXSMSXAASAMSSMSAXMMMSXXXASAAXAMSSMMMMAAXMASMMSMSMSXXSAX
MAAMXSMMSXAXSXMMSXAAXMMASMSAXAMAMAAXMXSSSSSMSMAMXMMMMMMMSXMXAAAMMMSSMMMSMAAAMMAMSMAMAXAXMMMMXMAMXAAMAMXMXMXXMSMMSMAMSAAAAMMSMMMXAAXAMASAMMMM
MSMSAAAAAMSMMMXXXMMMMMSXSAAMSSMASXMMSMAMAMXMAAAMXMAXAASXMASXMMXSAMXMAAAAMAMMMXMMAMAMSSMSAMMXMSMMSMMMSSXXAAXMXAMMXXXMSXMMXMXMAXSMMMMAMAMAMAAX
XAAMXSMMMSXMMASXSMAXAAAMMMXXAXMAXAAAXMAMAMASXSASAMSSSXSASXMASAMMASASXMSAMXSXXMASASAMXMASAMXAMAXAAAMAXAASMSXMSMSAMXMMMMSMMMSMMMXAASMSMSSSSSSS
SMSMMMMSMXMAMXSAASMSMSMXAXMMASMXSSMSSSMSASMSAMAMAAMAMXSAMASXMAMSAMASXMAXMAMMAMXXASASAXXMXMSMSMSSSSMMMMMXAAMXAXMXMSAMXAAAXASAAMSSMSAXAXAAMAMM
MXMAAMAMAASAMAMXMMXAMXXSMSMMAMMAMXAAAAXSASXSASXXMMMAMXMAMXMXSAMMMMXMAXXXMASMSMSSXSAMMMMSSMMXAAAAXAAXAXXMMMASMSSSXMSSXSXSMASMMMAMXMMMSMSMMAMM
XASMMSASMMSASXXAMXAMSSMXAAAAASMMSMMMSMMMAMMMAMXXMXSSMMSAMAXXMMMAAMXMASMMSMXMAAMSAXXXXMAAXAAXMMMSMSMSMSAXAMMXXAAMAMXSAAAXMXMMMXXMXMXAXXAXMXMM
SMXXXMXMAMXAMXXSSMMXSAMMSMSSXSAMXXAMAXAMAMXMMMSXXAAAAXMAMAMXASMSSMXAAXAAMAMSMSMSXMASMMMSSMMXSAAXXXAXAMMXMSXSMMSMMSAMXMMSXAAAMAXMASMMMMMMSMSM
SAMSMMSSSXSAMXXMAAXXMAMAXMAMASAMXSASAMMMMMMXMMXAMSSSXMSAMXXSAMMMMAMSAMMMMAMXAMAXMAMXXAMAXXAAXMSMMMMMSMSMXMAXXAAMAAAXAMXXXMSSSMAMAXASAAAAAMAX
MAMSAMAAXMMAMXMSAMXSSMMSSXMMMMXSASXMAMMSMSMAMSMSMAAAXASASAAMMSAAMSMAAXSASASMSMAMSSXMASMMASMSSXMAXXXAXAAMAMSMXSXSMSMMAASAXMAMAMMSMSASMSMSSSMX
SAMMAMMSMSMSMAXSASAMAMXXMAMXMASMMSMMSAAAAASASXAXMMMMXMXAMMMMAMXMSMXMSMSASAMAAMXMAMAAAXAMAMMXMASXMASMMMMSASAMXMMMXAXXXMSAMXASMMAAXXXXXXMAXMXX
MXMXMMMAAAXAMXMMXMMSAMXMSSMAXMXMAMXAMXSMSMSMSMMMMSMSSSSSMXXMAMSSMXMMXAMMMMXSXSMMMSXSSSXMAXMASAXMAMAAASXSXSASXXAXMASMAXXMXSXMAMMSSXMSMSMXMXMS
SMSAMASMSMSXXAMMAXXSXMAMXMASMXAMAXMASAXXXAMAXAXAXAASAAXMAXXMAMSAMXAAMSMXSMXMASAAMXAMAMXSAXSAXXXXMSSSMMXXASMMMSSMMAXXXMASMXASMMSAMAXMASAXSAMX
XASXSASAAXAMMSXMMSMMSXMSASXMXSMMMSMAAMMMMMMMMMMMSMSMMMMSAMXMXXSAMXSXXAXAAXSSMSSMXMSMMMMMMXMASMSMAAXMMSSMAMMAAMXAMASMMSSMASAMXMMAXXAMXMAMSAMS
MXMAMASXSMXSAXASAMAASXMSAXASAMMSAAMMSXAXASASAMAMAMAMASMSXMXMMMSAXAMMMSMMSXMAXMASMSMSXXXAXSMMXAAMMMSMAAXMAMMXSSSXMXSAAXXXXMXSXXSMMSMXAMMMSMMA
AAMAMAMAXXAMMSAMASMASAMMAMSMMAAMXMMSMXMSMSASXSAXMSASASAMXXAXAAMMMXSAAXAXMMSMMSAMXAMSXXMASXMMMSMXSAXMMSSSMSAMAAAASXMMSMMMXMAAMMSAMASMXSAAXAMX
SXSXSXMMMMSSXMASMMMXSAMMAMXAMMSSMMSSMSMAAMAMASASASASXMAMXSMSSSMMSASMSSSMAAXSXMXMSXSMAMSMMAXMAAXMASMXAXXMASMMSSXMXAXSMXAAAMAMSASAMAMMMSMSMMMA
MAMAXAMSSXXAXMAMXMSMSXMXMXSXMAMAMMASAAXAMAAMMMAXAMAMXMAMXSAAAAAAMXSAAAAMMMSMXSSMAMAMAMAASMMMSXXAXXXMMSMMMMXAAAMXXMMMASXSXSSXMMSXMAMAASXXAMXM
MSSMMXXAXMSMXSAMXMAASASASXSSSXSAMXMMSMMMXSSSSMSMXMSMMSSSMMMMMMMMSMMMMMMMAXAAXSASASAMXSMMAASAAAXSAMXXAAAMMXMMSXSAAMAMMMXXMAMAMXMMSSXMMSASMMAM
AAAMMXXSXMXXASMSAXMSMAXASAMASAMXMSXAMXASMMMAMAXAXXXAAAAXAXXXXMXMAXXMASXSSSMSMSAMXSASXXMASMMMXSXMASMMSMSMMXSXAMMMMMASMSAMXASAMASXAAXSAMXMXSAM
MSSMMMMMXSMMMSASXSSMMMMMMXMAMSMAMXMMSSMMAAMAMMMMSSSMMMSMSXMMSMASAXMMMXMAXAAAAMAMXSAMXXSAXMASAMMSAMMAMSMASMMMMXSAMMXMASASXMSXSSSMMMMMASMMXXMX
MXAAAAAAXMAMSMMMMXXAAXSXMXMASMSMSXXAAAMSSMXMSMXAAAAAMAXXMASAMSMMMXSAAAMMMMMSSMMMXMAXSAMXSSXSAMAMSAMXMASAMAAAXXMASAMXMSASMASAXAMXSAAMAXAMXMSA
ASMMSSXMMMAMMAMXAMSMMSMAMAMXMXAMXMXMMSMAMXAXAMMMSSSMMASAMAMAMSXXAAMMXXMXMMAXAXXSXSMXMAMAMAMSXMXSMMSMSMMMSSSMSXSAMXMXAMAMMAMAMAMAMMMMMSMSAAMX
MSAMXXXASMSSSSMSSMXAMAXSSMSAXSXMAMMSAMMASMMXAMMMAMAAMMMMMASMMMMMMMSSMSMAMSMSMMMMASMXMXMXSAAMASXMMMAAAXAMAAAAXMXMMAMXMMXMMSMMAMMXMAXXXAAMMSMM
XSAMAMSAMAAAAXAMMXMASAMXAAMXMAMMASAMMXSASAXXSMAXASXMMMSMXASXASXMSAAAAAMAMAAAXMXMAMMXMAXASXMSAMAMXSMSMMMMMXMAMXAASASMXMXSAXAMXMAMSMSSMMSMAAXX
XXXMAXSXMMMMMMSMMAAMMAMSMMMMAMASMMMSMAMSMXMAXSXSAMXAAMAMAMXMXMAAXMSXSXSASMSMSSXMASXASMSMXMXMAMXMASAMASXMSMXXAMMMSASAAXMMASMMAMAMAMXAAXMASMMM
XMSSSXSAXMAMXMXASXSXSAMMAMMAMXXAXAMSMAXAMAMMMAMMMMMSXSASMMSXSMMMAMAAXMSAMXAMXXAMASMMAAXMASXMAASMMSASAMSAAXMSSSMAMMMXXSAMXMASMSSSSMSSMMXAASAM
AXMAMASAMMASAMSMMSXMSAMXAMXSXSMXMMSSSMSMXAXAMXMMASXAAMASMAAASXMAAMMMSAMAMSMSAMXMASASMXMSAMAAAXXAXSXMASXSMSAAAAAXXAXXMAMSASXSMAMAMXMAMXMMSMSX
MSMMMMMMMSASXXAASAMAXAASMMMXAAMASMAXXXAXSSSMSASAAXMMSMXMMMMXMASXXAXAMAMXMAAMAAXMXSAMXMXMASMXSSSMMXXXMMMMMSMMSMMSMSMSAMASASXXMAMAMMMAMSXXMAMX
AAMXAXAXMAMMXSSMMASMMSMAMAMMAMMAMMSMSAMXMMAASASMAMMAXMASAMXXSXMMMMMMMASMMMSMXSMSMMMMXMAMMMXAXMASASMMSAAMASAXXAAXAAASMSAMXMAMSMSASXXAMXMMMAMM
SMXSASMSMSAMXAMXMAMXAMXMMAXAMXMSSMAAXMXMSMAMMXMXXAMXMXMAMAMXMAXSAXMAXXSAAAMAMAAAMAMMMMMSMAMMMSXMXXAASASMASXMXMMMSMXMXMASMXSAAXAAAMSMMAMXMAMA
MXMAMMMAAXASXSSXSAMMSMAXSSSSSSXAAMMMMMAMAXAXSMSASXMSXMMMASXMSAASXMMSSXMXMXXAMMSMSASMSAAXMAMXAMASMSMMMAAMMMASXXXAXXXMSMXMXAMMMMMMMAAXXASMSSSS
MASXSAMXSSXMMXAXXAXAASXXMMAAAMMSMMXAASASMSMSMAMASAASAMAMAXAMXMMMXSAAXAXSMSSXMXMXSASASMMMSSSXMSAMXAAMMXMSXSAMXMMMMMXMAXMXMXSAASXSMSMSSMSAXMAX
SAMAMXSAXMASXMSMSSMXMAMXSMMMMMAAASMSXSXXXAXAMXMXSXMMAMXMMSMMXXXAAMMMSSMSAXAAXXMAMAMMMMSMAXAMMMASXSMXMSMAAMMMAXAAAAMXMSAMXSSXXXAXAAXXAAXXXMMM
MASMMMMXSMMSXSAAXAAMXSSXMASXSXMMSMAAXMASMMSXSXSXSXMMMMAAMAXXXAMMMMMXAMAMMMSMMAMSXSAXXXAASXMMSSXMAXXMXSMMSMASASMSMXSAAAXASMMXMMSMSMSSMMMMMSXA
XMAMXXSMXAAMMSXSMMMMMMAXXAMAXAMSAMXMSMAMAAAASAMMSXSAMSSMSASMMSAAMMSMMMAMXAAXAMXXAMXMASMSMAAAXXMMMSMMAXMAAXXMAMAAAASMMSMSMSAASMXAMXMMMSAAAMXS
XMASMMXAMMMSASAXXXMSAMXMASMMSSMAMXAXXXXXMMMMMAMASASAMAAXMAAAXASXSAMASXSSMSSSXMAMXMAXXAXAXMMMSXSAAAAMSSSSSMSMMMSMMMXMAXXAXMSMSAMMMAMAAXXXMMMM
XMAMASMSXMAMMMAMXMASMSXSXXAXAXXXMXMSSMMMXAASXSMMSASXMMSSMSMSMMMMMASMSAXXAAXMMMASAAASXSSSSSSXSASASMSMAXMAXAMXMAXAXSAMXSAMXMAMMMMASASMXXSSXSAS
MMASXMAXAMMSAMAMASXMASAXAMSMSSSSSSMAXAAASMMSAMXXMAMAXSAXAXXXAAAXSXMAMAMSASASXSXSAMXSAAAXAAMAMMMAXAAMXSMAMXMAMXMAMXASAAAXMXASXXSMSASMSAAMMMAS
XSAXAMMSXMXMASASASAXSMMMMXAMXAAMAAMASMMMXAAMAMXMMXMXSMMSAMASXSSXMAMXSAMXXMASASXMAMMMMMMMMMMAMAMXMMMSAXMASMSMSSSMMSSMMMMMMMASAMXXMASAAMXSXSAS
MMXXAMXSAMMSAMXMASMMMAASMMSSMMMMSMMASASMSMMMSMSMSSSXSAAMASXXMXXASMMAXXSXXMSMMMASMMMAAAXAMSXMXSSMMSAMMSMXXAAAXAAAMXMASXMASMSMMAAXMSMMMXXAXMAM
AAMSMMAXAXAAMMMMMMMMSSMSAAMXMMMXAMMXSAMAAXXXAAXAAAXASMMSAMXXSASMMMMMSMMMSSXASMAMAASXSSMMMASMAXAAAMASASXSMSMSMSSMMAMAMXMAMXXAMSMMMMAASMAMXMAM
MXMAXMXSMMSXMAAMAAXXMASMMSMAAASMMSMAMAMSMSSSMMMMMSMMMSMMAXSAMASAAXAAAAAAXXSMMMASMMMMMMAAAAAMMSSMMSAMAMAAAXAAAXAAMAMAMXMMXSSMMMMAASMMSXAXASAS
AMSSSMASAAAASXMMMSMSXMASAAXMMXMAAAMASAMXXAMASXSAAXXSASMMAMXMMAMMMMMSSSMSSMMMAMXMASXXAMXMMXSMXAAXAMAMAMMMXMSMSSMMSSSSSMSAXXAXMASXMMAMMMXMXSAS
XAXAXMASMMSXMAMSXXASAMXMSSXSSMMMMMSASMSMSMSAMXXMXXAMAMMSAMXSMMSSMXMAAXAMAAAXXXSXAXXMSSSMSMXXMMSMSMSSSSSSXAXAAAAMXAAMSAMXXSAMXAXMAMSASXSXMMMM
ASMSMMASXMMXMAAAAMMMXMMMMMMMMAASXMMAXAAAMXMAMSSMMSMMSMMASXAXXAAMAAMMSMSMSSMSSXSMSMXXAAAAXXSMSMMAMSAAAAAXMASMSSMMMMSMMMMXMAMAMMMMMXMAAAXMASAS
MAAXXXAXAXSXSMSMMMSMASAAAAAMMSMMAXMSSSMSMSSSXAAMXAAAXMSAMMSSMMSSSXSAMXXAMXAXMAMAMMMMMSMMMMAAAAMAMMMMMMMMMMAMAAAXXAXAMXMMMAMSMXASXSMMMXMASAMS
XMSMSMMXSMSAXAMXAAASAXXSSSXSAMASMMXAXAAXMAAMMSMMXSMMSAMASAAAXAXAAXMASMSMSMSAMXMAMMAAAAMAAAMSMSMSMMAXAAXMXSMXSSMMMXMXMSAASASXMSASAAXAXSAMAMXX
MXXASASAMXMAMSMSMSMMSSMMXMAMMMXMXMMMSMMMMMSMAMXMAMAMMXSSMMSSMMMMMXSXMASAXXMAMXMASXSMSASMSSMAMMAXAXMXSSSMAMXAXAMMSMSMMXMMMMMAXMMMMMMSXMASMXMA
MXXMMAMXXMMSXAAXAXXAAMXSAMXSSSXMXSAMAXAAXXXMMSAMASXXXXSXAAAAAXSXXXMAAMMAMXXMMSSMSMXXMXSMAXXAMSASMMSMMAMMAMMMMXMASAAASMMXAAMXMAXSAMAXXMAMXAAA
MSMSMSXMASMMSMSMMMMMMSASASAAMXASASASASMSSMMMASAMMMMMMMMSMMSSSMMXASMAMSSMSSMAMAAXSASASASMAMXMMSXXXAAAMSMSASXSASMAMXXMMAMMSMSMSSMMAMSSSMXXMMMM
XAAAAXAXAAXAMXAAXXXAAMASXMMSMSAMASAMMMXXMAAMASAMSSMAAAXAMAAXMAXXMASAXXAAAMSAMMSMMXMAMXSMASXSASAMMSMMXAAMASAXASMASXSMSSMAXASAAXXSAMXAMAASXMSS
XMMMXXXMSSMMSSSSMMMXXMAMAXXAMXAXAMMMMSMSSSMMXXAXAAXXMSMMMMASMXMSXMSMXSMMMXSMSXMXMAMAMXMMAAAMASMAAAMASMSMAMMMMMMXSAAAAXMXSAMMMMMMSXXMXMASAAAM
XSSSMSAAAMXAAMAXAXASMMSSMSSSMSSMXXXAXAAMAAASMSSMSSMMXXAMAXAMXXSXAMXXAMXSXXMASMSMSXXAXXSAMMMMXMXMAXXXMAXAMXSAAASAMMMMMMMXMXMAMXMAXMMXAXASMMMS
AXAAASMMMSXSMSAMXMMSAAXAXAAAMAXXXSSMSMSMMMMXAAXAMXXSASAMSMSXSXMXAMAMXSXXMMMXMAAXMAMSXMMXSMMXXXMSMSXMXSXMXAMXXMMASMXXSXSASASASMMAMAMSMSASXSSX
XMMMMMXXXAAXXMASXSXMXMMSMMSMMMMAMASAAMAAXAXMMMMMMAMMAMMMMAMXSASXSMXMAXMAXAXXMSMMMSMXASMSAMXAMAMAAAXMMXAMMMSMSSSMMMSMMASASASAMAMXMAMXAAAMAXXS
SAAAXAAMMMMMMSAMAMMSSMMXAXXMASASMAMXMSSSMSXAXAXAMAXMAMMAMAMAMAMAMASXMSSMMSMMMAMXMMAMAMMXXXAAAAXMSMMMAMAMAMAMXAAXXMAMMAMMMAMASXMSSSSMMMXMXMXM
ASXSSMMMAAAAAMMMSMSAXAASXMXMASAXMSSMXXMAAAASXMXSSSSSSXMASAMAMAMXMAMAXAAAXMAMSMSAAMAMSMMSMMSMSMSMAXAMSSSMXSASMMMMMSSMMASAMXSAMAAXAAXMXMMXMASX
MMXMAAASMSSMSXXAAXMASMMSXXXXXMMMMAAAXSXXMMAMAAAXMMAAMMSASXSSSMMXMASXMXMMMMSMMASXSMMSAAMAAAAAAAAMMMSMAAAXAXASMXAXXAAXSASXSASXSMMMMMMXAXMAXXXM
XMASMMMSAAAMXMMMXMXMXAAMMSSMMSMMMSSMMSXMXXXSMMMSAMMMMAMAMAMAMASMSASMMMASXAAAMAMSMAMAXXMMMXSSMSMAXAAMMMMMMSMXMSXSMMSMMASAMAXAXXAAMAMSMSSSXMAA
XXAMAAAXMXMMXAAAAMASMXXSAAAAAMAMAXAXAXAMMSMSXSXSAMAAMXSXSASMSAMAMASAASMXMXMXMMMXXAMMMMMXSAMAXXMMMSXMAAMAAAMAXSXMAAAAMXMAMMMSMSSSMAMAMXAAASMS
SMSSSMMSSSXMSSMSMSASAAMMMSSMMMAMMXAMSSXMAAMSAMXXXMSXXMAASASXMXSSMMMMMAMAMASMSMSSSMSXSAMAMAXSAMXXXAAXSSSSSSSMMSXXXMSXMXMASXAMAXMAXXXAMXMSMMAM
MXMAAASAXMAMAAMAAMAMMAXAMXAAASXSSMMMMXAMSMSMMMSMXMXSMAMMMMMMMMMAMSAXXMMAMMAAAAAAAAAAASMSSSMMAMSMMMSMAAXMAMAMAMMMMXXXSSMSSMXSSSSSMMSSSXMAMMMM
MSMSMMMMSSSMSSMMSMXMAMMASXXMXSMAXAAASXMMXXXXMAMSXSAMSXMAMXAASXSSMMXSMXSSSSMSMMMSMMMSMAMAAXAAAXAAXAAMMMMMSSSMMXAXAAMXMAMAMMASAMAMAXAXMASASAMX
XAAAXXAXMXAMXAMAAXXMAMSMMMASASMSMSSMSAMAXMXMASXAMMAMAMMSASMXSAMASMAXAMXAAAXXMXXAMAAMXAMMSMXXMSXXMMSMMASXAAXAXSSMSASXSAMAAAMMMMASAMXMXMXMMMMM
SMSMSSSSMXMSSXMSMSSMAXAAASMMAMAAMXMXXAMSSSXXAXMMMSMMXSAMXAXAMMMAAMAXMAMMMMSMSMSMSMSSSSSXXMAAXMMSSMXAMASMSMMXMXXAMAMMMXXSSXMAMMMXMAMSXSAMSMSM
AMAAMAAXASXAAAXAAMMSMSSXMXAMXMSMXAXXSXMXAMMMXXAXAXAAXMASMSMMSXMSSMMMSAMXAAAAAXSMMMAAAAAXAMXSXAAAAASAMAMAAXMAXAMMMAASXAMMAMSASAAMASMAAMMMAAAS
MSMSMMMMMMMMSSMXSMASXAXSSMMSAAMASXSMASAMAMMAMMSMSSSMXSAMAXAXAAMAMAAAMAMSMSSXSAMXSAMMMMMSASAAMMMSMMMMMMSSMMXAMMSSMSXMMXSMAMSASMSMMMMMSMSSMSMS
XAMXMSXMXAXXAAMAMMAMMXSAXAAXMMMAXAAAAMXSAMMMSAXAAAAMMMASMSXMSMMASMMMSMMXAXXAXASASAXMXMXMAMMXAXAAMAAAXAAAXSMMSAAMMXAXSAAMMMMMMMXXAXXAAAXMAAAX
AMXXXAASXMSSMMMXSMMSAMXMSMMSSXMXMSMMXSXSASAAMMMMMSMMSXAXAMXMAXSAMXXXAAXMSMMSMMMXSAMXASAMXXAASMSSSSSSMMSMMASAMXMSASMMMXSXSMSASMMSSMASMMMMAMSM
MSMSMSMMSAAXXXMMSAMXMAAXSXAAXXSSMAMSMSXSAMXSMXMAMAAAMMMSMXMMAXMASMXSSSMAMMAAAXAXMMMSMSMSXMAXXAMAAMAMAMMMSAMMXMXMAXSAMXXAMXSASMAAAXAMXSAMXMXM
XXAAAAXAMMSSMASAMAMMSMSXSMMSMMAXXASAAMAMXMSAMAMAMSXMSAMAXSMMSSSMAMXAAXMXMMMSSMSSMAXXMSXMAASAMXMXXMAMXSSXMAXXAMAMMMSXSAMAMXMXMMXSMMSAMXSSXSAS
MSSMSMMMXMXAMMMSMXMXSAMASXMAMMASMMXMXMAMAXAMSAXAXXAMSASXMXAAAXXMAMMXMMXSAMAMXAAAXMSAXMAXMAXAMMMASXXSAXMAXXMXASASAAXXMXSAMMMAMAXXXXMAXSAMASAS
XAAXMXMAAXSSMMAMXAMAMAMAMXXAXMAMAASXSSSSSSMMSMSMASAMSAMXMMMMSMSMSSMAXAMSAMSXMXSAMXMMMSMMMSXSMAMAMSAMAMSSMMSXASXXMXSMAMXAMAXASMMSMXSSMMAMAMXM
MSXMXAMSMXAMXMASXXMAXAMSSSMSAMXSMMMAAXAAXAAAXMAXMMMMMAMXMASAMAASMAXAMXMMXMXAMMMXMASMMMAXXXAXSMMMSMXMXMAMAAXMXMMXSSMAASXSSMSAMMAAMAMXXSXMSSSS
MMXMSXMAXMAMXMASMMMMSASAAXAXMAMMXAMMMMSMSSMMSSMSSXSASAMXXAMASXMMSAMXAAAXMASXMXMSXAAAAMAMMMMMAMSMAMXXXMXSMMMXMAXAMAXXASAXAAMXMAXAMXMMMSAMMAMX
XAAXXMASXSMMXMASAAAAMMMMSMMMMSAASXSASAAXAAMXXAXAAXSXSASXMAXMMAXXMSSMSXSASASAXMASMSXSMMAMMAMSAMXSASMMXSXSAAASMMMXSAMMMMMMSMXXMMSXMSAMASAMMAMA
MSMSASAMXMAMXMASMMSMSXMXXAXSAXMXMASAMMXSSXMASXMMSMMMXMMXAMXMSAMXAAXMMXMXMAXAMMMMAMMMMSMSXXMSXMXSXSAXMXASMMXMAMAXMMMSMAXAXXMXXXSAAAMMASXMSASX
XMXSXMXSAXAMXMASAMAMMASASMAMAXAAMXMAMMMAMAXMMMMXXXSAMSSSSSXMAMXMMMSMMASAMXMSXSAMMMAMXAXMASXMSAXXAMMSAMXMSMASMMSSMSAMSMMASMMMSASMMMXMAXMXSAMX
XMAMXMASMSXSAMXXMMXMMAMASMSMSMSASXSAMXAAXXMMAAMMMXMXSAAAXXXAXXAAAAAAXAMXMXXAASXMXMMSSMMMASAAAMMMXMXSMSXMASMXXAXSAMXXAXSXXAAMMMMAMMXSXXSAMAMM
SMSMXMAXXAAMASASASAMMSMMMMAMAAMASAMXMXMXMMMMAMXAAAAXMMSMSMMMSSSSXSSSMASXMSMMXMAMSSXAMSMMAMMMMXXAMSMSXSMSMSXXMSMMMMMSSMMMSMMSAAMSMSASXMMASXMA
SAAAAXXSMXSAAMAAAMMSAMAAAMAXMXMXMASASAXAMXAMSSSSSMSASAAAAAASMAMMMMAXXAMXMAAXXMASAAXMAAXMSMMASAMXSAASASAAXMMXSAAAMAAMXAMAXMASXSMXAMASXXXAMXXS
MXMXSXMMMMMMXMXMSMXMASXMSSMMMAXXSAMASXSAMSAMXAXMXAXMSSMMSMMSMMMMAMSMMMSSSSSXXXSXMMXXMMXMXASXSAMXSMSMAMMMMAMXSMSMSMSXSAMSSMASMMXMAMAMAAXSXMXM
SSMAXMMAAAXXAMMXAMAXAMAXAAXAASMMMASAMXMAXXAMMMMXMXMXMAMMMMMXAXAXXXAAXASAMXMMSMAMXXXSSXSASAMXSAMXXXAMAMSSSMMMMAXMXAXMMSXXAMXSXAASAMAMMMAMAMSX
SAMASASXSSSMXMASMSXSAMXMASMMMMAXSXMASXMAMSMMAAXSMMSSSMMASXMSSSMMSXMMMMXAAASAXXMAXMXMAAMMMAMAXAMAMSMXXSAXMAAAMSMSMMMXAMXXAXAMXSXSASXSMXMXAMAM
SAMASMMMXMAAAMMSAAMMAMXXXXAXASXMAMSAMMSMAAXSXSAAXASASXMMSAAAAXMASAMXAXXSMMMSSMXSXSAMMMMASMMXSSMSMAMSMMMSSSMSSXAXAMAMAMSSSMASMMAMMXMXMXMSMMAM
MMMMMMAXAMXSSSMMMMXSAMMSMXMSASAMXAMASAAMSMXXAMXMMXSAXMMXSMMMSMMMSAMASMMXAXAMXAXMASMSSXMMMAXXAXAXSMMAAAXAMAAMXMSMXXXSAMXAXSXMAMAMXAMSAMMAMMSS
XSASMSSSMSAXAAXMAAMSAAAAASXSXXMASASMMXXXAXSMXMAXXXMMMXMAMXXXXAXXMAMXAAASXMMSSSMMAMMMAASXSMMSMMMMXMSSXMMSAMXMAMAAMSMMMSMAMXMSMSMMSASMAMMASAAX
ASASAAXAXMMSSMMSMSMSSMMSSXMMASMXSASMAXXSASXMASASMMXSAMXSMMMMMMXSMMSMMMXMAAAAMASMAMAXSMMXAAAMXSAAAMAMMAAMMXMAMSMSMAAAXAMXMAAMXMXAMMXXMMSAMMSM
AMAMMMSMMXAAAAXXAMXMASMXMMAMAMAAMAMMXMXMXMXSAMSMXAMSAMAAXAAMASASAMXAXXMASMSXSAMSMMMXAXXXMMMMASXSXSASMMMSSSSMXSAMMSSMMXMASAMSAMMXSMMMMMMMSMMA
MMMMMAMXAMMSSMMSMSASAMXMASMMSSMSMXMAMSAMXMAMXXAMXXASMMSMSXMMAXASMMSAMMMAAXXAMAMXXASMSMSMMSAMXMAMXMAMXAAMMAAXAMAMXMXMAASMXMAMAXMXAMAAXAAASMMS
XASASXSXSSXAMMMSASAMAMAMAMXMXMXXMAMXXSXXXMASMSASMMMXMAMMXAMMSSMMXAXAMAMXSAMXMSAMMXSAMAAAASASMSXSAMAMMXMXMSMMXMAMXMAMSXMASMMSSMMSASMMSMMMSAAX
SXSASASMAMMMMSAMXMMSSMAMMSAMAMXMSMSMMMSMXMASAAAAXXASMXSASAXAMAASMXXMSXSXXMAMXMAXSAMXMXSMMSXMAAMMASXSXMMMXAMAMSMSAMSMMAMAAAXAMAXSAMXXMXSASMMS
SAMAMAMAAXXSAMXSAMXAAXXMAXASMMAXXMAXAAMMAMSSXMMMSAASAASAMAMSSSMMMMSMAAMMSSMASMXMMASXMXMAMSMMMMSSMMAAXMAAXMMAXAASMXMASXMSSMMSMSMMMMSAMAMXMAAS
MAMAMMMSMSXMASAXASMMSSSMXMAMXSMXSMAXXXAMXSAMMXSASMAMMMSAMXMAAAMAAAASMSMAXAMMXAMXMXMASMMAMXAMAAXXAMAMMSASXXSSSMXMMSMMMAMXAXAAXMAXSAXMMSSSXMXM
SXMASAAAMXASMMMMMMMXAXMAXMXMMAMASMMMSAMXMMXMMMMASMSXXASMMSAMXMMXMSMXSAMSSMMXXMSSXMMAXASXMSSSMSSXMMSXAMAXXAXAXXMMAAAASAMSXMSMMSAMMSSXMAAMMSSM
MAMAMMXMASXMAAAASASMSSMSMSAAAMMAMAAASMSXXSMMSAMXMAXMMXSMASXXMXSSMXAMMMXAMXAAASAMASMSMMMMAAAAAXAASAMXMXSMMXMXMMXMSSSMSAMXAXXXMXXAAMMAMMMMXAAM
SAMXXSMMAMASMMSMSASXMAAXASXMXXMSSSMMMXMXMXAMXAXSMMASMMXMASMMSAMXAMSSXMASXMMSSMASAMXXAXAMSMXMMMAXMASAMAMAXXMXXMAMAMXMXMMSMMMMMMMMMSSXMASXMSSM
MMXSAMAMASMAMXMAMAMASMMMASMXMAXAAXAXMAXASXSMSMMXXSAMAXXMAXAXMAMMXMAAMSAMAMXXAMMMMSSSMMXXAAASXSXSXXSAMASAMAXSSMXMMSAMXSAMAAXAAAAAMXMMSAMXXAAA
MAAMAMMSASXXMAXASASMMXXMXMAASAMMSMMASMSMXAMMSXAXMMMSMMSMMSSMXSSMMMXSMMASASMSMMXXXAXAAASXMSMSASASMMSASAMMSMAMAMAXXSASAMASXMXSSSSMSAMMMASMSSXM
MMSSMMASASMMMXSAMAXXSXMASMSMSAMAMASAAMAXMXMASMXMXSXAXAAAASAMXAAMXSAMAXXXAMAAMSMMMMSXMMMAXMAMAMAMMAMMMMXMAXXSSMSSXSAMXSMSASAMMAAMSASASAMXXAMA
MAAAXSXMASAXAAMXMAMMMXSASAMAMAMASMSMMSAMXSMMMMXSXMXSSSMMMSASMXXMAMASMMSMSMSMXAAAXXAXSMSMMMAMXMAMMSSSMMASMSMAMAXMAMXMXMAMAMSMMSMMSXMASASAMXAM
MMSSMSAXAMXMMSSXMASMAAXXSAMSMASXSAXMXMAMAXMMSSMMAMSXAAXAAMXXXSSMMSAMASAAAAAMXSMMSSSXSAAMMMXAXSMMMMXAASASAXMAMSMMAMASAMXMAMAXXAMXMSMXMMXXAAXS
MAMMAMXMMSXSAMXMSASMMMSMMAMXSXSXMMMSASXMMMSAAAASAMSMSMSMSMMMMAAAAMASMSMSMSMSAXAAAAMAMSAXAAMMMASXSSSSMMAMMMSASAAXSSMSXSXSXSMXXAXAXASAAMMMSSSM
MAXMSMXMAXXMMMSAMXXXXAXAXAAXAMXMXAAXMSMMSAMMSXMAMMXAAXAAAXAAXMSMMSAMXSXXAMAMASMMMMMAMAMSXSAMMAAXAAAMAMXMMXSMSXMMAAASAMAAXAXXXMMAXMMSMMAMAMAM
SMSAAAXASXXMMMAMMSSSMXSMMSMMXSAMXMXSASAAMAMAXXMASXMSMSMSMSSSSXXAMXMMMSAMSMSMMMXMAMMAMAXMAMMXMMMMMMMSSMMASASXMASMSMMMAMAMMMMSMSASMSMXXSXMXSAM
AAMXMMSAXASASMSXAAMAXXAAAXASMMAMSAMMXMMMSAMXMASASAAXAXXXAMXAMMMAXMASAMMXMAAMAMXXAASXSSSMMMSSMMXMAMXXAASAMXSXMAAMASXXAMASAAXAAAAXAAASMSASMSMS
MSMSMAMMAMMASAAMMXSAMXSMMSXMASMMAMXMMMAMXMXXSAMMXMMMMMAXASMMMAXAMXAMXXMAXSMSASMMMMMAAXAMXAAASAMSSSMSSMMASAMAMSMSASXSASXSMSXMXMMMMMSMASAMAXAX
AMAAMXMXAXMXMMMXMXMASAXAAMASMMSMAMMMASMSAMAMMMMMSSMSMASAMXAAMMSSMMMXAMXSMMXSXSAAAAMMMMMAMMXSMMMAAAMAAMSMMMSXMAXMASAMXMASAMXAASASXXXMXMMMMSXM
SMXMXSSSXSAMXXMSMMSAMASMMSAMXAAMAXXSXMMSAMASASAAXAAAAAXSXMSMSMAAXSSMXSAXAMASAMMSSSSXXAXSMSMXXSMMSMMSSXAXMAMXXXXMAMXMAXXMAMMXMSAXMMSSXXMSASAM
MAMXMMAAAMAXXAAXAAMASAMMMMXSMSSMXMAXASXSXMXSXSMSSMMMMMSMMMMMAMMSMAAMXSXXAMXXAAAMAAAMMMSMAAASAXSAXMXAXMMSMASMMSMMMSAMMSSMMMSXMMMMAXAXXSAMAMSM
XAAXAMSMMMAMSMAMMMSAMMMXAAXXXAAASMSMXXAXXMXMAMXMAMSXASXAASASASMMAMMMASASMMSSMMXMMMMXAXXMSMSMAMMMMMMMSMXXXXXXAAMXASMSAAMAMXMASAMSSSMMAAMMMMMX
SXSXSXXXAXMXXXAXAMMMSMMSMSMMMXAXMAMAMMMMXMAMAMAMMAMAXAMSMXASASMXAMXMASMSAAXXXMMXXSMSMXSMXMXXSXMMASAXAAXMXMXMSMXMXSASMXXAMAMAMAMAAAXAXMXMXAXA
XSAMXMMSMSMMMSXSXMASAMAAAAAAAMMSMXMASAAXASASXSSSMSASMMAAMSMMXMASAMXMASXSMMMMAMMSMSAAAMSASXAXMAMSASXSASMMMSAMASAAAMAMAMSSXSSSXSMMSMMSXXAMMXSM
SAMXMAAAAAXAXXAMXSMSASXMSSMMXSAAXMSASMXXAMXSXAAXAMAMXXSMXAXSXMMASAAXAMXXXMASAAAAAMSMXMMAMMSXSAMMMSXMAMAXASAMAXMSMMMMXMAMMXAMAAMXAXXXAMAXMMAM
AXMAMMSMSMSMMSSMAXXSMMAAAXAAAMMSMMMXSASAMXMMMSMMAMSSXAMXSMAMASXAXSMSSSMMSSMSXSXMSMXXSMMAMAXMMMMSAMAMXMMMMSMMMSAAMAAXXMMSSMAMMMMSXSASMSSMAMAA
MMSXSAAXAXAMAAAMASMMASMMMSMMMSAMAXSAMAMAXSXAAAXMXMMAMXSAMXMMAMMMMMMMMAASASMMMMMMMMMMSAMMMMXAAMAMASMMAMASXMXAXAXMSSSSXSAAAMXMXXAXAMAXXAAXXMAX
SAXAMASMXMXMMSAMAMAAAAXMASMAMMMSAMMASMMMMASMSSMMASMXMAMMMXSMXSAAAXAXXMMMASXMASAAAAAXMAMXAAMSMMAMXMASMSASAMMXSAMXAXXAAAMSMMSMMASMXMAMMMSMMSSM
XSMMSSMAXMMAMXXSXMSMMMMMSSXXXAXMXXSMMXAMXMXMAAASASXSMXSAXXSAASXSXSSSMXMMMMXSASMSSSSSMXMSMMAXMMSXXSMMAMASXMAMSXSMMSAMMMXMXAAASMMMAXSXAAXAMAAM
MXMAMAXMASAASXMXAAMMMSMXMMXMSMSXSXAMAXMSAXMSSSMMASAMMAAXAMMMMSAAAMMMXAAAAMMMMSAMXMAXMXMASMSMMAXSMMXMXMXMXMXMMMMAXMAMAXAXMMSAMXMSSSMMMXSAMSSM
SAMMSMMXAMMXSAAMMMAAMAAXASAAAAMAMSMMAASXMAXAAXXMXMAMMAMMXAASMMMMXMAAXMSMSMAAAMMMAMASXXMAXXMAMASAXMASASAMXXXASAMXMXSMMSMMAMXAMXMAXAXMSASAMXAX
SXSXMXMMSMMASXSXSSSSSMSSMXASMSMAMAMMMXSAMXMMSMXMASAMXSSMMSXSMAAXASMSSXAAMMSMSMXSAMXMASAXSASXMXSMMXMSMSASAMSMSASXMAXAXMXSSMSAMSMMSXMMMASMMSSM
SMMAMASMAAMASMMXMAXAAMAMMMMXMAXAMAXXMAMASXXXAXASXMMMXMAXAMMMMSXSMSAMXXMMSAXMXAAXXXXMAMMXMMMASMXMAAXMASMMAMAASAMAMAMMXMASAAMSAAXXSMMAMXMAMAMA
SAXMSAMXSMMSSXSMMMMMXMAXXAMXMMSMMMSSMMSAMMMMMMMMAAAMASMMXSASMMMSMMMSAMXAMAXAMMSXSSSMMMSAMXSAMXAXSXSXAXASMMMMMXSXMMMSAMXSAMXMSSSXMAXSSXSAMASX
XMMXMAXXMXSASXSAMXXSXMASXSMMXAAXAXXMAAMXSASAAASMSMMXMMAAXMMXAXAMXAMXMXMSSSMSXAMXXAAXAAMMSAMASMMMXMMMMSMMAASXSAMMMAASXMXMASXMAXMAXSMAAASASXSM
MSMMSSXAAXMASMSAMAMAMMASMMMSMSSSMSAMSMMXSASMSMSAMAAASXSMMMASMMMSSMSASXXMAXAXMASXMSMMMSSMMAMAMASAXAAAXSXMSMMAMXSAMMMSASAMASASXMASAAMXMMMMXMMA
XAAAAXSMMMMXMASMMAXMSMASMXAAAAAAAMXMAASAMMXAAAMAMMSMSAMAAXMSAXSAAXMAMSAMXMSMMSAXAAXXAMAXSSMMSAMXSSSSSXSAAAXSMASXSAASXMAMASAMSAAMMXXSAMXAAXSS
MSMMSXXXAXXSAMXXSASXMXSMXMSMSMMMMMASXSMXSMMSMSMMMAMXMXMSSSXSXMMMSMMMMXXXSAMXXMXMSMSMMSXMAMMXMASAXMMXMASXSSMMMXSXSMXSMSXMXMMMSMXSXMSMSXMSAMAM`;

const result = findXmas(grid);
console.log(`Number of X-MAS occurrences: ${result}`);


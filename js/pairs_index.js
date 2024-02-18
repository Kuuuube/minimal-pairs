const pairs_index = {"pitch0": ["0", "10", "100", "101", "102", "103", "104", "106", "107", "108", "109", "10b", "10c", "10d", "10e", "10f", "10g", "10h", "10i", "10j", "10k", "10l", "10m", "10n", "10o", "10p", "10q", "10r", "10s", "10t", "10u", "10v", "10w", "10y", "10z", "11", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "11a", "11d", "11e", "11f", "11g", "11h", "11i", "11j", "11k", "11l", "11m", "11n", "11o", "11q", "11r", "11s", "11t", "11u", "11v", "11w", "11x", "11y", "11z", "12", "120", "121", "122", "123", "124", "125", "127", "128", "129", "12a", "12b", "12c", "12d", "12e", "12g", "12h", "12i", "12j", "12k", "12m", "12n", "12o", "12p", "12q", "12s", "12t", "12u", "12v", "12w", "12y", "13", "130", "131", "132", "133", "134", "135", "136", "137", "138", "13a", "13b", "13c", "13d", "13e", "13f", "13h", "13i", "13j", "13l", "13m", "13n", "13p", "13q", "13r", "13s", "13t", "13u", "13v", "13w", "13x", "13y", "13z", "14", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "14a", "14b", "14c", "14d", "14f", "14g", "14h", "14i", "14l", "14m", "14n", "14o", "14p", "14q", "14r", "14s", "14t", "14v", "14w", "14x", "14y", "15", "150", "151", "154", "155", "156", "157", "158", "159", "15a", "15b", "15c", "15d", "15e", "15f", "15g", "15h", "15i", "15j", "15k", "15m", "15n", "15o", "15p", "15r", "15t", "15u", "15v", "15w", "15x", "15y", "15z", "16", "160", "162", "163", "164", "165", "166", "167", "168", "169", "16a", "16b", "16c", "16d", "16e", "16f", "16g", "16i", "16j", "16k", "16l", "16m", "16o", "16p", "16q", "16r", "16s", "16t", "16u", "16v", "16w", "16x", "16y", "16z", "17", "170", "171", "172", "173", "175", "178", "179", "17a", "17b", "17c", "17d", "17e", "17f", "17g", "17h", "17i", "17j", "17k", "17l", "17m", "17n", "17o", "17p", "17q", "17r", "17s", "17t", "17u", "17v", "17x", "17y", "17z", "18", "180", "181", "182", "183", "185", "186", "187", "188", "18a", "18b", "18c", "18d", "18e", "18f", "18g", "18h", "18i", "18j", "18k", "18l", "18m", "18n", "18o", "18p", "18q", "18r", "18s", "18t", "18v", "18w", "18x", "18y", "19", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "19a", "19b", "19c", "19d", "19e", "19f", "19g", "19h", "19i", "19j", "19k", "19l", "19m", "19n", "19o", "19p", "19q", "19r", "19s", "19t", "19u", "19v", "19w", "19x", "19y", "19z", "1a", "1a0", "1a1", "1a2", "1a3", "1a4", "1a5", "1a6", "1a7", "1a8", "1a9", "1aa", "1ab", "1ac", "1ad", "1ae", "1af", "1ag", "1ah", "1ai", "1aj", "1ak", "1al", "1am", "1an", "1aq", "1ar", "1as", "1at", "1av", "1aw", "1ax", "1ay", "1az", "1b", "1b0", "1b1", "1b2", "1b3", "1b4", "1b5", "1b6", "1b8", "1b9", "1ba", "1bb", "1bd", "1be", "1bf", "1bg", "1bh", "1bi", "1bj", "1bk", "1bl", "1bm", "1bn", "1bo", "1bp", "1br", "1bs", "1bu", "1bv", "1bw", "1bx", "1by", "1bz", "1c", "1c0", "1c1", "1c2", "1c3", "1c5", "1c6", "1c7", "1c9", "1ca", "1cb", "1cc", "1ce", "1cg", "1ch", "1ci", "1cj", "1ck", "1cl", "1cm", "1co", "1cp", "1cq", "1cr", "1cs", "1cu", "1cv", "1cw", "1cx", "1cy", "1cz", "1d", "1d0", "1d2", "1d3", "1d4", "1d5", "1d6", "1d7", "1d8", "1d9", "1da", "1db", "1dc", "1dd", "1de", "1df", "1dg", "1di", "1dj", "1dk", "1dl", "1dm", "1dn", "1do", "1dp", "1dq", "1dr", "1ds", "1dt", "1du", "1dv", "1dw", "1dy", "1dz", "1e", "1e0", "1e1", "1e2", "1e3", "1e4", "1e5", "1e7", "1e8", "1e9", "1ea", "1eb", "1ec", "1ed", "1ee", "1ef", "1eg", "1ei", "1ej", "1ek", "1el", "1en", "1eo", "1ep", "1eq", "1er", "1es", "1eu", "1ev", "1ex", "1ey", "1ez", "1f0", "1f1", "1f2", "1f3", "1f4", "1f6", "1f7", "1f8", "1f9", "1fa", "1fb", "1fc", "1fe", "1ff", "1fg", "1fh", "1fi", "1fj", "1fl", "1fm", "1fn", "1fo", "1fp", "1fq", "1fr", "1fs", "1ft", "1fu", "1fv", "1fx", "1fy", "1fz", "1g", "1g0", "1g1", "1g2", "1g3", "1g4", "1g5", "1g6", "1g7", "1g8", "1g9", "1ga", "1h", "1i", "1j", "1k", "1m", "1n", "1o", "1p", "1q", "1r", "1s", "1t", "1u", "1v", "1w", "1x", "1y", "1z", "2", "20", "21", "22", "23", "24", "25", "26", "28", "29", "2a", "2b", "2c", "2e", "2g", "2h", "2i", "2k", "2m", "2p", "2q", "2r", "2t", "2u", "2w", "2x", "2z", "3", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "3g", "3h", "3i", "3j", "3k", "3l", "3m", "3o", "3q", "3r", "3s", "3t", "3u", "3v", "3w", "3x", "3y", "3z", "4", "40", "41", "42", "43", "44", "45", "46", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "4g", "4h", "4i", "4j", "4k", "4l", "4m", "4n", "4o", "4p", "4q", "4r", "4s", "4t", "4u", "4v", "4w", "4x", "4y", "4z", "5", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "5g", "5h", "5i", "5j", "5k", "5l", "5m", "5n", "5o", "5p", "5q", "5r", "5s", "5t", "5u", "5v", "5w", "5x", "5y", "6", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "6g", "6h", "6i", "6j", "6k", "6l", "6m", "6n", "6o", "6q", "6s", "6t", "6u", "6v", "6w", "6x", "6z", "7", "70", "71", "72", "74", "75", "76", "77", "78", "7a", "7b", "7c", "7d", "7e", "7f", "7g", "7h", "7i", "7j", "7k", "7l", "7m", "7n", "7o", "7p", "7q", "7r", "7s", "7t", "7u", "7v", "7w", "7x", "7y", "8", "80", "81", "82", "83", "84", "85", "86", "87", "88", "8a", "8b", "8c", "8d", "8e", "8f", "8g", "8i", "8j", "8k", "8l", "8m", "8n", "8o", "8p", "8q", "8r", "8s", "8t", "8x", "8y", "8z", "9", "90", "91", "92", "94", "96", "97", "98", "99", "9b", "9c", "9d", "9e", "9f", "9g", "9h", "9k", "9m", "9n", "9o", "9p", "9q", "9r", "9t", "9u", "9v", "9w", "9x", "9y", "9z", "a", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ac", "ad", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az", "b", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "be", "bh", "bi", "bj", "bk", "bl", "bm", "bn", "bo", "bp", "bq", "bs", "bt", "bu", "bv", "bw", "by", "bz", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "cg", "ci", "cj", "ck", "cl", "cn", "co", "cp", "cq", "cr", "cs", "ct", "cu", "cv", "cw", "cx", "cy", "cz", "d", "d0", "d1", "d3", "d4", "d5", "d6", "d7", "d9", "da", "db", "dc", "dd", "de", "df", "dg", "dh", "di", "dj", "dk", "dl", "dm", "dn", "do", "dp", "ds", "dt", "du", "dv", "dw", "dx", "dy", "dz", "e", "e0", "e1", "e2", "e3", "e5", "e6", "e7", "e8", "e9", "ea", "ec", "ed", "ee", "eg", "eh", "ei", "ej", "ek", "el", "em", "en", "eo", "ep", "eq", "er", "et", "eu", "ev", "ew", "ex", "ey", "f", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff", "fg", "fh", "fi", "fk", "fl", "fm", "fn", "fo", "fp", "fq", "fr", "fs", "ft", "fu", "fv", "fw", "fx", "fy", "fz", "g", "g1", "g2", "g4", "g5", "g7", "g8", "g9", "ga", "gb", "gc", "gd", "ge", "gf", "gh", "gi", "gj", "gk", "gl", "gm", "gn", "go", "gp", "gq", "gr", "gt", "gu", "gv", "gw", "gx", "gz", "h", "h1", "h2", "h3", "h4", "h5", "h6", "h8", "h9", "ha", "hb", "hc", "hd", "he", "hf", "hi", "hj", "hk", "hm", "hn", "ho", "hp", "hq", "hr", "ht", "hu", "hv", "hx", "hy", "hz", "i", "i0", "i1", "i2", "i3", "i5", "i6", "i8", "i9", "ia", "ib", "ic", "id", "ie", "if", "ig", "ih", "ii", "ik", "il", "im", "in", "io", "ip", "iq", "ir", "is", "it", "iu", "iv", "iw", "ix", "iy", "iz", "j", "j0", "j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "ja", "jb", "jc", "jd", "jh", "ji", "jj", "jk", "jl", "jn", "jo", "jp", "jq", "jr", "js", "jt", "ju", "jv", "jw", "jx", "jy", "jz", "k", "k0", "k1", "k2", "k3", "k5", "k6", "k7", "k8", "k9", "ka", "kb", "kc", "kd", "ke", "kf", "kg", "kh", "ki", "kj", "kk", "kl", "km", "ko", "kp", "kq", "kr", "ks", "kt", "ku", "kv", "kw", "kx", "ky", "kz", "l", "l0", "l1", "l2", "l3", "l4", "l6", "l7", "l8", "l9", "la", "lb", "lc", "ld", "le", "lf", "lg", "lh", "li", "lj", "lk", "ll", "lm", "ln", "lo", "lp", "lr", "ls", "lt", "lu", "lv", "lw", "lx", "ly", "lz", "m", "m0", "m1", "m2", "m3", "m5", "m7", "m8", "m9", "ma", "mc", "md", "me", "mf", "mg", "mh", "mi", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mv", "mw", "mx", "mz", "n", "n0", "n1", "n2", "n3", "n4", "n6", "n7", "na", "nb", "nc", "nd", "ne", "nf", "ng", "ni", "nj", "nk", "nl", "nm", "nn", "no", "np", "nq", "nr", "ns", "nt", "nu", "nv", "nw", "nx", "ny", "nz", "o", "o0", "o1", "o2", "o3", "o4", "o5", "o6", "o7", "o8", "o9", "oa", "ob", "oc", "od", "oe", "of", "og", "oh", "oi", "oj", "ok", "ol", "om", "on", "oo", "op", "or", "os", "ot", "ou", "ov", "ow", "ox", "oy", "oz", "p", "p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "pa", "pb", "pc", "pe", "pf", "pg", "ph", "pi", "pj", "pk", "pl", "pm", "pn", "pq", "pr", "ps", "pt", "pu", "pv", "pw", "px", "py", "pz", "q", "q0", "q1", "q2", "q3", "q4", "q5", "q8", "q9", "qa", "qb", "qc", "qd", "qe", "qf", "qg", "qh", "qi", "qk", "ql", "qm", "qn", "qo", "qp", "qq", "qr", "qs", "qt", "qu", "qw", "qx", "qy", "qz", "r", "r0", "r1", "r2", "r3", "r5", "r7", "r8", "r9", "ra", "rc", "rd", "re", "rf", "rg", "rh", "ri", "rj", "rl", "rn", "ro", "rp", "rq", "rs", "rt", "ru", "rv", "rw", "ry", "s", "s0", "s1", "s2", "s3", "s5", "s7", "s8", "s9", "sa", "sb", "sc", "sd", "sf", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "sp", "sq", "sr", "ss", "su", "sv", "sw", "sz", "t", "t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "ta", "tb", "tc", "te", "tg", "th", "ti", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tq", "tr", "ts", "tt", "tu", "tv", "tw", "tx", "ty", "u0", "u1", "u2", "u4", "u5", "u6", "u7", "u8", "u9", "ub", "uc", "ud", "ue", "uf", "ug", "uh", "ui", "uj", "uk", "um", "un", "uo", "up", "uq", "ur", "us", "ut", "uu", "uw", "ux", "uy", "uz", "v", "v0", "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "va", "vb", "vd", "ve", "vf", "vg", "vh", "vi", "vj", "vl", "vm", "vn", "vo", "vp", "vq", "vs", "vt", "vu", "vv", "vw", "vx", "vy", "w", "w0", "w1", "w3", "w4", "w5", "w6", "w7", "w8", "w9", "wa", "wb", "wc", "wd", "we", "wf", "wg", "wh", "wi", "wj", "wk", "wl", "wm", "wo", "wp", "wq", "wr", "ws", "wt", "wu", "wv", "ww", "wx", "wz", "x", "x0", "x1", "x2", "x3", "x4", "x5", "x6", "x8", "x9", "xa", "xb", "xd", "xe", "xf", "xh", "xi", "xj", "xk", "xl", "xm", "xn", "xo", "xp", "xq", "xr", "xs", "xt", "xu", "xv", "xw", "xx", "xy", "xz", "y", "y0", "y1", "y3", "y4", "y5", "y6", "y7", "y8", "ya", "yb", "yd", "ye", "yf", "yg", "yh", "yi", "yj", "yk", "yl", "ym", "yn", "yo", "yp", "yq", "yr", "ys", "yt", "yu", "yv", "yw", "yx", "yy", "yz", "z", "z0", "z1", "z2", "z4", "z5", "z6", "z7", "z8", "z9", "za", "zb", "zc", "zd", "zg", "zi", "zj", "zk", "zl", "zm", "zn", "zo", "zp", "zq", "zr", "zs", "zv", "zx", "zy", "zz"], "pitch1": ["0", "1", "10", "100", "101", "102", "103", "105", "107", "108", "109", "10a", "10c", "10e", "10f", "10i", "10l", "10m", "10n", "10o", "10q", "10s", "10t", "10u", "10w", "10x", "10y", "11", "110", "111", "112", "113", "114", "115", "116", "118", "11a", "11b", "11c", "11d", "11e", "11f", "11g", "11i", "11j", "11l", "11m", "11n", "11p", "11q", "11r", "11s", "11t", "11u", "11v", "11w", "11x", "11y", "12", "120", "121", "122", "123", "124", "125", "126", "127", "129", "12a", "12b", "12d", "12e", "12f", "12g", "12h", "12i", "12j", "12k", "12l", "12m", "12n", "12o", "12p", "12q", "12r", "12s", "12u", "12v", "12w", "12x", "12y", "13", "132", "134", "136", "137", "138", "139", "13a", "13b", "13c", "13d", "13e", "13g", "13h", "13i", "13j", "13k", "13l", "13o", "13p", "13r", "13s", "13t", "13u", "13v", "13x", "13y", "13z", "140", "143", "144", "145", "146", "148", "149", "14a", "14b", "14c", "14d", "14e", "14g", "14j", "14k", "14l", "14m", "14n", "14p", "14q", "14r", "14s", "14t", "14u", "14v", "14w", "14x", "14y", "14z", "150", "152", "153", "154", "155", "156", "157", "158", "159", "15a", "15b", "15c", "15d", "15e", "15f", "15g", "15h", "15i", "15j", "15k", "15l", "15m", "15n", "15o", "15q", "15r", "15t", "15v", "15w", "15x", "15y", "15z", "16", "160", "161", "162", "163", "165", "167", "169", "16b", "16c", "16d", "16e", "16f", "16g", "16h", "16i", "16j", "16k", "16l", "16m", "16q", "16r", "16s", "16t", "16u", "16v", "16x", "16y", "16z", "170", "172", "173", "175", "176", "177", "178", "179", "17d", "17e", "17f", "17g", "17h", "17i", "17j", "17k", "17l", "17m", "17n", "17o", "17p", "17q", "17r", "17s", "17u", "17v", "17w", "17x", "17y", "17z", "18", "180", "181", "182", "184", "187", "188", "189", "18a", "18b", "18c", "18d", "18e", "18f", "18g", "18h", "18i", "18j", "18k", "18m", "18n", "18o", "18q", "18r", "18s", "18t", "18u", "18v", "18w", "18x", "18y", "18z", "190", "191", "192", "193", "194", "195", "196", "197", "19a", "19b", "19c", "19d", "19e", "19f", "19h", "19i", "19k", "19l", "19m", "19n", "19o", "19p", "19t", "19u", "19w", "19x", "19y", "1a", "1a0", "1a1", "1a2", "1a3", "1a4", "1a5", "1a6", "1a7", "1a8", "1a9", "1aa", "1ab", "1ad", "1ae", "1af", "1ag", "1ah", "1ai", "1aj", "1ak", "1al", "1am", "1an", "1ao", "1ap", "1aq", "1ar", "1as", "1au", "1av", "1aw", "1ax", "1b", "1b0", "1b1", "1b3", "1b4", "1b5", "1b6", "1b7", "1b8", "1b9", "1ba", "1bb", "1bc", "1bd", "1be", "1bf", "1bg", "1bh", "1bi", "1bj", "1bk", "1bl", "1bm", "1bn", "1bp", "1bq", "1br", "1bt", "1bu", "1bv", "1bw", "1bx", "1by", "1bz", "1c", "1c0", "1c2", "1c3", "1c4", "1c5", "1c6", "1c7", "1c8", "1c9", "1ca", "1cb", "1cc", "1cd", "1ce", "1cf", "1ci", "1cj", "1cl", "1cm", "1cp", "1cq", "1cr", "1cs", "1ct", "1cu", "1cv", "1cw", "1cx", "1cz", "1d", "1d0", "1d1", "1d2", "1d3", "1d5", "1d6", "1da", "1db", "1dd", "1de", "1df", "1dg", "1dh", "1di", "1dk", "1dl", "1dn", "1do", "1dp", "1dr", "1ds", "1dt", "1du", "1dv", "1dw", "1dx", "1dy", "1dz", "1e", "1e0", "1e2", "1e3", "1e4", "1e5", "1e6", "1e7", "1e8", "1e9", "1ea", "1eb", "1ec", "1ed", "1ee", "1ef", "1eg", "1eh", "1ej", "1ek", "1el", "1en", "1eo", "1ep", "1eq", "1er", "1es", "1et", "1eu", "1ev", "1ew", "1ey", "1f", "1f0", "1f1", "1f2", "1f3", "1f4", "1f5", "1f6", "1f7", "1f8", "1f9", "1fa", "1fb", "1fc", "1fd", "1fe", "1fg", "1fh", "1fi", "1fj", "1fk", "1fl", "1fm", "1fn", "1fo", "1fp", "1fr", "1ft", "1fu", "1fw", "1fx", "1fy", "1fz", "1g", "1g0", "1g2", "1g4", "1g5", "1g6", "1g7", "1g8", "1h", "1j", "1k", "1l", "1m", "1n", "1o", "1q", "1r", "1s", "1t", "1u", "1v", "1w", "1y", "1z", "2", "20", "21", "22", "23", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "2g", "2h", "2j", "2k", "2l", "2n", "2p", "2r", "2s", "2u", "2v", "2w", "2y", "2z", "3", "30", "31", "32", "33", "34", "35", "36", "37", "3b", "3c", "3d", "3e", "3g", "3h", "3i", "3j", "3k", "3l", "3m", "3n", "3p", "3r", "3s", "3t", "3u", "3v", "3w", "3x", "3y", "3z", "4", "41", "42", "43", "44", "47", "48", "4a", "4d", "4e", "4f", "4g", "4h", "4i", "4j", "4k", "4l", "4m", "4o", "4p", "4q", "4s", "4u", "4v", "4w", "4x", "4y", "4z", "5", "50", "51", "52", "53", "54", "55", "57", "59", "5a", "5b", "5c", "5e", "5f", "5g", "5h", "5i", "5j", "5k", "5l", "5m", "5n", "5o", "5p", "5q", "5r", "5s", "5t", "5u", "5w", "5y", "5z", "6", "60", "61", "63", "64", "65", "66", "67", "68", "69", "6a", "6c", "6d", "6e", "6f", "6g", "6j", "6k", "6m", "6o", "6p", "6q", "6r", "6s", "6t", "6u", "6v", "6w", "6x", "6y", "6z", "7", "70", "71", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7d", "7e", "7f", "7g", "7i", "7j", "7k", "7l", "7m", "7o", "7p", "7s", "7u", "7v", "7w", "7x", "7z", "8", "80", "81", "82", "84", "85", "86", "87", "88", "89", "8a", "8c", "8d", "8e", "8f", "8g", "8h", "8i", "8j", "8k", "8l", "8n", "8o", "8p", "8q", "8s", "8t", "8u", "8v", "8w", "8x", "8y", "8z", "9", "92", "93", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "9g", "9h", "9i", "9j", "9k", "9l", "9m", "9o", "9p", "9q", "9r", "9s", "9u", "9v", "9w", "9z", "a", "a0", "a1", "a2", "a6", "a7", "a9", "aa", "ab", "ac", "ad", "ae", "ag", "ah", "ai", "aj", "al", "am", "an", "ao", "ap", "as", "at", "av", "aw", "ax", "ay", "az", "b", "b0", "b1", "b2", "b3", "b4", "b5", "b7", "b8", "b9", "ba", "bc", "bd", "bf", "bh", "bi", "bj", "bk", "bl", "bn", "bp", "bq", "br", "bs", "bt", "bu", "bx", "c", "c0", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cd", "ce", "cf", "cg", "ch", "ci", "cj", "cl", "cm", "cn", "co", "cp", "cq", "cr", "cs", "ct", "cu", "cv", "cx", "cy", "cz", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "da", "db", "df", "dg", "dh", "dj", "dk", "dm", "dn", "dp", "dq", "dr", "ds", "dt", "dw", "dx", "dy", "dz", "e", "e0", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ee", "ef", "eg", "eh", "ei", "ej", "ek", "el", "eo", "ep", "eq", "er", "es", "et", "eu", "ev", "ex", "ez", "f", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f9", "fa", "fb", "fc", "fd", "fe", "fg", "fh", "fi", "fj", "fl", "fm", "fn", "fo", "fp", "fq", "fr", "fs", "ft", "fu", "fw", "fx", "fy", "fz", "g0", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gj", "gk", "gl", "gm", "go", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "h", "h0", "h1", "h3", "h4", "h5", "h6", "h7", "ha", "hc", "hd", "he", "hf", "hg", "hh", "hi", "hk", "hl", "hn", "ho", "hp", "hq", "hs", "ht", "hu", "hv", "hw", "hx", "hy", "hz", "i", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "ib", "ic", "id", "if", "ig", "ih", "ij", "ik", "il", "im", "in", "io", "iq", "is", "it", "iu", "iv", "iw", "ix", "iy", "iz", "j", "j0", "j1", "j3", "j5", "j7", "j8", "j9", "ja", "jb", "jc", "jd", "je", "jf", "jg", "jh", "ji", "jj", "jk", "jl", "jm", "jp", "jq", "jr", "js", "jt", "ju", "jv", "jw", "jx", "jy", "k", "k1", "k3", "k4", "k5", "k6", "k8", "ka", "kb", "kc", "kd", "ke", "kf", "kg", "kh", "ki", "kj", "kl", "km", "ko", "kq", "ks", "kt", "ku", "kv", "kw", "kx", "l", "l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "la", "lb", "lc", "ld", "le", "lf", "lg", "li", "lk", "ll", "lo", "lp", "lq", "lr", "ls", "lt", "lu", "lw", "ly", "lz", "m", "m0", "m2", "m3", "m4", "m5", "m7", "m8", "m9", "ma", "mb", "mc", "me", "mg", "mh", "mi", "mj", "mk", "ml", "mm", "mn", "mp", "mq", "mr", "ms", "mv", "mw", "my", "n", "n0", "n1", "n3", "n5", "n7", "n8", "n9", "na", "nb", "nc", "nd", "ne", "ng", "nh", "ni", "nj", "nk", "nl", "nn", "no", "np", "nq", "ns", "nt", "nu", "nv", "nx", "ny", "nz", "o", "o0", "o1", "o2", "o3", "o4", "o6", "o8", "o9", "oa", "ob", "oc", "oe", "og", "oh", "oj", "ok", "ol", "om", "on", "oo", "op", "oq", "or", "os", "ot", "ou", "ov", "ow", "ox", "oz", "p", "p1", "p3", "p5", "p6", "p8", "p9", "pa", "pb", "pc", "pd", "pe", "pf", "pg", "ph", "pi", "pj", "pl", "pm", "po", "pp", "pr", "pt", "pu", "pv", "pw", "px", "py", "q", "q0", "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "qa", "qd", "qf", "qg", "qh", "qi", "qj", "qk", "qm", "qn", "qo", "qp", "qr", "qs", "qv", "qw", "qx", "qy", "qz", "r", "r0", "r2", "r3", "r4", "r6", "r8", "r9", "ra", "rb", "rd", "re", "rf", "rg", "ri", "rk", "rl", "rm", "rn", "ro", "rp", "rq", "rr", "rs", "rv", "rw", "rx", "ry", "rz", "s0", "s1", "s2", "s3", "s4", "s5", "s6", "s8", "sa", "sb", "sc", "sd", "se", "sf", "sg", "sh", "si", "sj", "sk", "sl", "sn", "so", "sp", "sq", "sr", "ss", "st", "su", "sv", "sy", "sz", "t", "t0", "t1", "t2", "t3", "t5", "t6", "t9", "ta", "tb", "tc", "td", "te", "tf", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tq", "tv", "tw", "tx", "ty", "tz", "u", "u0", "u1", "u2", "u3", "u4", "u6", "u7", "u8", "u9", "ua", "ub", "uc", "ud", "ue", "uf", "ug", "uh", "ui", "uj", "uk", "um", "uo", "uq", "ur", "ut", "uu", "uv", "uw", "ux", "uy", "uz", "v", "v0", "v1", "v2", "v3", "v5", "v6", "v8", "v9", "va", "vb", "vd", "ve", "vf", "vg", "vh", "vm", "vn", "vp", "vq", "vr", "vs", "vt", "vu", "vv", "vw", "vx", "vy", "vz", "w", "w0", "w1", "w2", "w3", "w4", "w5", "w6", "w7", "w9", "wb", "wc", "wd", "we", "wf", "wg", "wi", "wk", "wl", "wm", "wn", "wo", "wp", "wr", "ws", "wu", "wv", "ww", "wx", "wy", "wz", "x", "x0", "x1", "x2", "x3", "x4", "x5", "x6", "x7", "xa", "xb", "xd", "xf", "xh", "xi", "xj", "xk", "xm", "xp", "xr", "xs", "xu", "xv", "xw", "xx", "xy", "xz", "y", "y0", "y1", "y2", "y3", "y4", "y5", "y6", "y7", "y9", "ya", "yb", "yc", "yd", "ye", "yg", "yh", "yi", "yj", "yl", "ym", "yn", "yp", "yq", "yr", "ys", "yt", "yu", "yw", "yx", "yy", "yz", "z", "z0", "z1", "z2", "z3", "z4", "z8", "za", "zb", "zc", "zd", "ze", "zf", "zg", "zh", "zi", "zj", "zk", "zl", "zm", "zn", "zo", "zp", "zq", "zs", "zt", "zv", "zw", "zx", "zy", "zz"], "pitch2": ["1", "10a", "10b", "10d", "10g", "10h", "10p", "10r", "10x", "117", "119", "11b", "11c", "11h", "11k", "11z", "123", "126", "128", "12c", "12f", "12r", "12t", "12x", "131", "133", "135", "136", "139", "13g", "13k", "13m", "13n", "13o", "13q", "13w", "13z", "141", "146", "14e", "14h", "14i", "14j", "14k", "14u", "14z", "15", "152", "153", "156", "15i", "15l", "15q", "15s", "161", "164", "166", "168", "16a", "16h", "16n", "16p", "16w", "17", "171", "174", "176", "17a", "17c", "17t", "184", "185", "189", "18u", "18z", "19", "199", "19j", "19q", "19v", "19x", "1a", "1ac", "1ao", "1au", "1ay", "1az", "1b7", "1bc", "1bl", "1bo", "1bq", "1bs", "1c4", "1cd", "1cf", "1cg", "1ch", "1ck", "1cn", "1co", "1ct", "1cy", "1d4", "1d9", "1dc", "1dh", "1dx", "1e1", "1e6", "1eh", "1ei", "1em", "1ew", "1ex", "1f", "1fd", "1fw", "1g3", "1g9", "1p", "1x", "24", "27", "2a", "2d", "2f", "2i", "2j", "2l", "2m", "2n", "2q", "2v", "2y", "38", "3a", "3h", "3n", "3o", "3q", "47", "4c", "4t", "58", "5d", "5z", "6b", "6i", "6l", "6n", "6p", "6r", "6y", "72", "73", "79", "7h", "7r", "7t", "83", "8b", "8h", "8m", "8u", "8v", "91", "94", "9a", "9i", "9j", "9l", "9s", "9t", "9x", "a4", "a5", "a8", "aa", "ab", "ae", "ak", "an", "aq", "ar", "au", "bb", "bd", "be", "bf", "bg", "br", "bw", "bx", "bz", "c", "cc", "ch", "ck", "cm", "cr", "cw", "d", "d2", "d8", "d9", "dc", "de", "do", "dq", "dr", "dv", "e1", "eb", "ef", "em", "en", "es", "ew", "ey", "ez", "fk", "fv", "g0", "g3", "gn", "gs", "gx", "gy", "gz", "h7", "h8", "h9", "hg", "hh", "hj", "hw", "i0", "i1", "i4", "i7", "ia", "ie", "ii", "ij", "ir", "j6", "j9", "je", "jf", "jm", "jo", "jz", "k0", "k9", "kk", "kp", "kr", "l0", "l5", "lh", "ln", "lv", "lx", "m1", "mb", "mj", "mo", "mt", "mu", "mx", "my", "mz", "n2", "n4", "n6", "n8", "nf", "nh", "nm", "nr", "o5", "o7", "oi", "oq", "oy", "p0", "p2", "p7", "pd", "pn", "pp", "q7", "qb", "qc", "qe", "ql", "qq", "qt", "qu", "qv", "qy", "r5", "r6", "ra", "rb", "rc", "rh", "rj", "rk", "rm", "rn", "rr", "rt", "ru", "rx", "rz", "s", "s4", "sm", "so", "sw", "sx", "sy", "t4", "t8", "t9", "td", "tf", "tg", "th", "ts", "tt", "tz", "u3", "ua", "ul", "up", "v7", "vi", "vk", "vl", "vo", "vr", "vz", "w2", "wn", "wt", "x7", "x8", "x9", "xe", "xg", "xl", "xo", "xq", "y2", "y9", "yc", "yf", "yk", "yo", "yv", "z3", "ze", "zf", "zt", "zw"], "pitch3": ["104", "105", "106", "10j", "10k", "10v", "10z", "111", "11o", "11p", "12l", "12z", "130", "13f", "14", "142", "147", "14f", "151", "15p", "15s", "15u", "16n", "16o", "174", "177", "17b", "17w", "183", "186", "18l", "18p", "193", "198", "19g", "19r", "19s", "19z", "1ap", "1at", "1b2", "1bs", "1bt", "1c1", "1c8", "1ch", "1cn", "1d1", "1d8", "1dj", "1dm", "1dq", "1em", "1et", "1ez", "1f5", "1ff", "1fk", "1fq", "1fs", "1fv", "1g1", "1ga", "1i", "1l", "2o", "2s", "2t", "2x", "39", "3f", "3j", "3p", "40", "45", "46", "49", "4b", "4n", "4r", "56", "5v", "5x", "62", "6g", "6h", "7c", "7q", "7s", "7y", "7z", "89", "8r", "8w", "90", "93", "95", "9n", "9y", "a3", "af", "b6", "bm", "bo", "bv", "by", "c1", "dd", "di", "dl", "du", "e4", "ed", "el", "f8", "ff", "fj", "g", "g6", "gc", "gg", "gv", "h0", "hb", "hi", "hl", "hm", "hr", "hs", "ip", "j2", "j4", "jg", "jn", "k2", "k4", "k7", "kn", "ky", "kz", "lj", "lm", "lq", "m6", "md", "mf", "mu", "n5", "n9", "ni", "nw", "od", "of", "p4", "pk", "po", "pq", "ps", "pz", "q6", "qj", "r1", "r4", "r7", "s6", "s7", "s9", "se", "st", "sx", "t7", "ta", "ti", "tr", "tu", "u", "u5", "ui", "un", "us", "uv", "v4", "vc", "vj", "w8", "wa", "wh", "wj", "wq", "wy", "xb", "xc", "xn", "xt", "y8", "z5", "z6", "z7", "z9", "zh", "zj", "zr", "zu"], "pitch4": ["12z", "14o", "1d7", "2o", "7n", "bg", "h2", "kn", "m4", "m6", "ul", "vc", "vk", "xc", "xg", "zu"]}
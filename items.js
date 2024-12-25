const photos = [];

const images = [
  // album 8
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143861/2071030-R1-008-2A_v7ixom.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735144854/2071030-R1-016-6A_ubimgx.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143858/2071030-R1-034-15A_pvvnkh.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143858/2071030-R1-040-18A_objjpg.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735144946/2071030-R1-042-19A_ac62l2.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143855/2071030-R1-038-17A_krxciw.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143854/2071030-R1-028-12A_qpsofo.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735144992/2071030-R1-020-8A_pnee4w.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143854/2071030-R1-004-0A_hmqhoh.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143854/2071030-R1-022-9A_wdemdy.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143854/2071030-R1-044-20A_biwmwz.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143853/2071030-R1-012-4A_gqapwg.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143853/2071030-R1-030-13A_finylm.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143853/2071030-R1-050-23A_fzecxk.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143851/2071030-R1-046-21A_sopqc4.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143851/2071030-R1-048-22A_px02pb.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143851/2071030-R1-058-27A_lnxcks.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143849/2071030-R1-002-00A_zwyhcy.jpg",
  },

  // album

  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735145327/2071030-R1-056-26A_ak9cbl.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143848/IMG_7330_aigldm.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143848/2071030-R1-000-XA_dldgf1.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735145188/2071030-R1-036-16A_tuvcqk.jpg",
  },

  // album bday in tw
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143846/Negative-0-025_iqzdws.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143846/2071030-R1-026-11A_u8arsj.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143845/2071030-R1-032-14A_f5rvkt.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735145412/2071030-R1-006-1A_ygolqo.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143844/2071030-R1-010-3A_igdklw.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143842/Negative-0-021_zfyusc.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143840/Negative-0-05_agsbg4.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143836/Negative0-00-6_co4htu.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143835/Negative0-00-10_i13i7z.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143834/Negative0-00-3_zqwkc7.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143832/Negative0-00-18_fdsncy.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143831/Negative0-00-4_szmvvu.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143830/Negative0-00-23_wtz5u8.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143830/Negative0-00-1_x0h9sq.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143824/Negative0-00-15_ptvds8.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143824/Negative0-00-11_wofm28.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143821/Negative0-00-19_gj5qxh.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143819/Negative0-00-5_xczniq.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143816/Negative0-00-21_qz1up0.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143815/Negative0-00-20_lbrkga.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143814/Negative0-00-16_ycdfnj.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143809/Negative0-00-12_owsw35.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143808/Negative0-00-0_cegvlt.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143808/Negative0-00-9_lkrhta.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143808/Negative0-00-9_lkrhta.jpg",
  },

  // album 7
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143808/Negative0-00-13_sc4eh2.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143808/Negative0-00-2_cygwyz.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143801/Negative-010_monpva.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143804/Negative0-00-24_pxquyc.jpg",
  },
  
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143798/Negative-020_hmazn4.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143798/Negative-06_fdglap.jpg",
  },

  // album 6
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143797/Negative-05_iwvvji.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143797/Negative-07_ae0vhe.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143795/Negative-021_ntljpe.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143793/Negative-011_xvdgfn.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143792/Negative-019_juvwl4.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143791/Negative-016_dy3ife.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143790/Negative-09_ibsb64.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143787/Negative-018_sykkuz.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143786/Negative-015_d8xldz.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143786/Negative-08_m1bdvu.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143785/Negative-023_ssdloq.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143785/Negative-03_jq6hqg.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143782/Negative-014_exjfai.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143781/Negative-012_tc5thj.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143777/Negative-01_a5exj7.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143775/Negative-013_axp0fa.jpg",
  },

  // album 5
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143774/Negative-017_orubcf.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143774/Negative-024_lccbdb.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735145716/Negative-08_cwyqkj.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143766/Negative-013_pcbm4v.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143764/Negative-022_krck4w.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143764/Negative-01_papxvv.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143763/Negative-017_rpygrm.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143762/Negative-015_cvykxe.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143760/Negative-04_q3gzkp.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143758/Negative-018_tpi0ix.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143758/Negative-024_u7uguw.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143757/Negative-09_qlpejm.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143757/Negative-03_lhhbdr.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143748/Negative-06_v4l20n.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143747/Negative-016_k9fxsk.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143746/Negative-020_fjvoen.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143743/Negative-011_v0afl1.jpg",
  },

  // album 4
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143743/Negative-023_dghmcq.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143738/Negative-05_xyikfk.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143737/Negative-014_ssgu0c.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143722/Negative0-24-21A_1_cdcpmg.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143722/Negative0-18-15A_1_d0dr8l.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143721/Negative0-23-20A_1_zun2aw.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143719/Negative0-25-21A_1_inm2f8.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143718/Negative0-02-00A_1_ycyfba.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143717/Negative0-19-16A_1_vg1yhc.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143717/Negative0-08-5A_1_pe6ifx.jpg",
  },

  // album 3
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143717/Negative0-22-19A_1_ttzd13.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143716/Negative0-18-14A_1_vgumly.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143716/Negative0-26-22A_1_ou2djh.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143715/Negative0-20-16A_1_y6auin.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143714/Negative0-13-9A_1_o8hhy9.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143714/Negative0-15-11A_1_mdgbr7.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143713/Negative0-25-25A_1_cl5ka9.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143712/Negative0-11-7A_1_igjqm6.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143712/Negative0-12-8A_1_vcwhxy.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143711/Negative0-20-17A_1_uj6hdg.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143710/Negative0-17-13A_1_mk2kns.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/v1735143709/Negative0-16-12A_1_jxkw5z.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143706/Negative0-10-6A_1_gnhbws.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143704/Negative0-24-20A_1_cy12py.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143704/Negative0-21-17A_1_fybsub.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143702/Negative0-22-18A_1_efvmow.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143703/Negative0-09-6A_1_ijg9sm.jpg",
  },

  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143700/Negative0-08-4A_1_zkc0co.jpg",
  },

  // album 2
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143699/Negative0-23-19A_1_jvnn4f.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143699/Negative0-09-5A_1_bdyykm.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143349/4098-03_xxgtwa.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143349/4098-01_sw3rgb.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143348/4098-02_o90grq.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143347/4098-17_plnawi.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/v1735143346/4098-07_rxjf3y.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143346/4098-08_mbyxl0.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143344/4098-11_qtq99q.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143341/4098-04_ocpj5n.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143341/4098-16_cmgpbc.jpg",
  },

  // album 1
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143339/4098-12_qcgd9v.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143338/4098-13_ihuc35.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143252/4097-12_llzo5y.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143246/4097-02_rlzycx.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143246/4097-08_rqkmjg.jpg",
  }, 
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143246/4097-07_ocpzyg.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143244/4097-20_rey5oc.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143242/4097-11_tfehu0.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143241/4097-01_trajdr.jpg",
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto/v1735143240/4097-03_sa7ffc.jpg",
  },
  
];

let imageIndex = 0;

for (let i = 0; i < images.length; i++) {
  let item = {
    id: i,
    title: `photos ${i}`,
    image: images[imageIndex].url,
    ...images[imageIndex],
  };
  photos.push(item);
  imageIndex++;
  // if(imageIndex > images.length - 1) imageIndex = 0;
}

console.log(photos);

const photos = [];

const images = [
  // ========== 2025 ==========
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408400/IMG_9390_vy1rfk.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408425/001056140002_xw7hx8.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408394/001056130004_nadcym.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408414/IMG_9391_jydqxa.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408395/001056130005_wn5t7g.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408402/IMG_9392_rr3c9l.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408426/001056130028_yb2sqj.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408426/001056140004_vmk0mu.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408397/IMG_9393_bhvtts.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408412/001056130003_rvwxx9.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408405/001056130002_eknzjh.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408430/001056130023_h67991.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408430/001056130020_skhgsn.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408429/001056130027_qxbyv6.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408426/001056140003_dutw2b.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408436/001056130010_mtxrxm.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408435/001056130013_fx0e9w.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408433/001056130017_uwomnp.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408433/001056130018_vaipoa.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408431/001056130021_lw9v8q.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408439/001056130008_zzjcuk.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408438/001056130025_nt7dps.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408438/001056130014_uixhjb.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408437/001056130011_eg51sv.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408437/001056130009_jqaxnr.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408442/001056130024_zjswxr.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461622/000003_dh7ano.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461641/000003_nd78vi.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461640/000004_qpgggy.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461624/000002_fyenvm.jpg",
    tags: ["Taipei, Taiwan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408414/001056140013_ofmvjs.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408392/001056140025_thwmjj.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408401/001056140026_xm6vct.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408402/001056140023_xy3v4i.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408405/001056140028_kszho9.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408406/001056140021_lhqdot.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408408/001056140016_y7dnkc.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408410/001056140018_rqy75x.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408412/001056140020_ur3tvg.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408414/001056140012_vxxsft.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408414/001056140019_ivlomj.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408417/001056140010_ubp0u6.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408418/001056140014_lgbztm.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408418/001056140015_y8kwk6.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408422/001056140007_sgtgtx.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408423/001056140009_zrktvj.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408422/001056140005_zlhkmn.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408440/001056140022_j2n0hw.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408432/001056140006_uaoefa.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408430/001056140024_xnfd9y.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408424/001056140008_mm8req.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408441/001056140011_ivjvdp.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768408440/001056140017_uzgnhq.jpg",
    tags: ["Japan", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461637/000011_wwilua.jpg",
    tags: ["New York", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461637/000010_w9p3eh.jpg",
    tags: ["New York", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461636/000014_yfrfap.jpg",
    tags: ["New York", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461636/000016_to3i96.jpg",
    tags: ["New York", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461638/000012_h6upy8.jpg",
    tags: ["New York", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461637/000009_acx9vb.jpg",
    tags: ["New York", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461637/000017_xevhhy.jpg",
    tags: ["New York", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461646/000015_fbzezh.jpg",
    tags: ["New York", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461645/000018_jnlrbw.jpg",
    tags: ["New York", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461639/000008_bdgrkg.jpg",
    tags: ["New York", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461617/000033_vist5u.jpg",
    tags: ["San Diego", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768470494/IMG_9509_bloqqn.jpg",
    tags: ["San Diego", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461623/000035_bk1tet.jpg",
    tags: ["San Diego", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461625/000031_xvipvl.jpg",
    tags: ["San Diego", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461623/000034_ah19px.jpg",
    tags: ["San Diego", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461617/000033_vist5u.jpg",
    tags: ["San Diego", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461632/000037_rc5yue.jpg",
    tags: ["San Diego", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461630/000038_bfzhjx.jpg",
    tags: ["San Diego", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461630/000036_fybfbb.jpg",
    tags: ["San Diego", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461619/000005_k7zubr.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461619/000006_ts0jip.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461619/000018_rn22vp.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461618/000009_lejapn.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461624/000015_jdexuv.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461620/000008_i2mfsq.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461621/000004_ivpyii.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461620/000007_txcfh0.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461627/000011_nsfzll.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461627/000012_yb750j.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461626/000014_nas1kr.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461632/000019_ibebb5.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461632/000030_st0lqn.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461632/000022_roglvy.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461631/000032_gmglaq.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461642/000035_ygevwz.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461641/000005_vekqt6.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461638/000006_rcif6v.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461633/000020_vntjq7.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461642/000035_ygevwz.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461645/000033_id0jqe.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461644/000024_iddnze.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768461643/000034_uar1x3.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623155/46_c5i2mf.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623155/45_gumx9g.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745626741/44_pur8yh.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623153/43_g1bh9z.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623152/42_xpht3v.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623152/41_ize6cp.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623150/40_zxevyg.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623150/39_bhywcr.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623149/38_bk2xr7.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623149/37_usi9r7.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623146/35_wepywg.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623147/36_ecg1ib.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623144/33_qdgcdt.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623144/32_nn5cdu.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623143/31_szxtez.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623142/30_cemwjz.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623142/29_vop4s4.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623140/28_pm16ug.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623139/26_jxri8m.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623139/27_z64kfc.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623138/24_wnqtie.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623139/25_ipmbdo.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623138/23_jil9re.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623136/22_xaqfo6.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623135/20_wiesce.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623134/19_mcdign.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623134/18_qh6zxd.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623132/17_bfys4l.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623131/15_qe7apz.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623131/16_fxf9fk.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623130/14_zrcyep.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623130/13_c186hl.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623119/12_cacdic.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623109/11_w09yyu.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623107/10_sby20t.jpg",
    tags: ["Coachella", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623156/47_fhqqfl.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623156/48_xd69ny.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623159/50_ghgjct.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623160/52_sirg7s.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623160/51_vnutfg.jpg",
    tags: ["SF Bay", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623106/9_rjxtsf.jpg",
    tags: ["Lake Tahoe", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623106/8_qgcugs.jpg",
    tags: ["Lake Tahoe", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623105/7_dsp8tf.jpg",
    tags: ["Lake Tahoe", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623105/6_jn2qeh.jpg",
    tags: ["Lake Tahoe", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623102/5_hltchb.jpg",
    tags: ["Lake Tahoe", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623100/3_gwfs47.jpg",
    tags: ["Lake Tahoe", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623100/4_s7raox.jpg",
    tags: ["Lake Tahoe", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623100/2_aoohwb.jpg",
    tags: ["Lake Tahoe", "2025"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1745623100/1_ewq3em.jpg",
    tags: ["Lake Tahoe", "2025"],
  },

  // ========== 2024 ==========
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252832/negative-0-_22_2_p03f1p.jpg",
    tags: ["Taipei, Taiwan", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252827/negative-0-_23_lqzrbj.jpg",
    tags: ["Taipei, Taiwan", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252824/negative-0-_25_flg1q8.jpg",
    tags: ["Taipei, Taiwan", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252810/negative-0-_24_2_szouod.jpg",
    tags: ["Taipei, Taiwan", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252807/negative-0-_24_b5zpnk.jpg",
    tags: ["Taipei, Taiwan", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252806/negative-0-_22_qam8lh.jpg",
    tags: ["Taipei, Taiwan", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252744/negative-0-_8_2_wfdx79.jpg",
    tags: ["Taipei, Taiwan", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252803/negative-0-_23_2_csdap5.jpg",
    tags: ["Taipei, Taiwan", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252789/negative-0-_19_2_ik4cam.jpg",
    tags: ["Taipei, Taiwan", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252785/negative-0-_18_2_mja9fb.jpg",
    tags: ["Taipei, Taiwan", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252783/negative-0-_17_2_snnfv7.jpg",
    tags: ["Taipei, Taiwan", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252733/negative-0-_11_2_s1wyfv.jpg",
    tags: ["Seoul, Korea", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252736/negative-0-_6_2_v5wl3o.jpg",
    tags: ["Seoul, Korea", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252738/negative-0-_12_2_ltzxln.jpg",
    tags: ["Seoul, Korea", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252741/negative-0-_13_ygcqnx.jpg",
    tags: ["Seoul, Korea", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252744/negative-0-_14_2_efki3a.jpg",
    tags: ["Seoul, Korea", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252744/negative-0-_8_2_wfdx79.jpg",
    tags: ["Seoul, Korea", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252764/negative-0-_9_2_bhkfzp.jpg",
    tags: ["Seoul, Korea", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252771/negative-0-_10_2_pfegrx.jpg",
    tags: ["Seoul, Korea", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252774/negative-0-_7_2_ltthzd.jpg",
    tags: ["Seoul, Korea", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252789/negative-0-_15_2_jqeaj4.jpg",
    tags: ["Seoul, Korea", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252762/negative-0-_14_ht6nyy.jpg",
    tags: ["SF Bay", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252773/negative-0-_15_w3zmpw.jpg",
    tags: ["SF Bay", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252777/negative-0-_16_zzlfjq.jpg",
    tags: ["SF Bay", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252788/negative-0-_18_wqljkx.jpg",
    tags: ["SF Bay", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252792/negative-0-_19_wiqkaq.jpg",
    tags: ["SF Bay", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252796/negative-0-_21_b9cxdi.jpg",
    tags: ["SF Bay", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252797/negative-0-_17_rrtwhf.jpg",
    tags: ["SF Bay", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252803/negative-0-_20_mvfdws.jpg",
    tags: ["Bay area", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252732/negative-0-_10_wwyfgc.jpg",
    tags: ["Netherlands", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252735/negative-0-_3_f2nhes.jpg",
    tags: ["Netherlands", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252740/negative-0-_6_zlenly.jpg",
    tags: ["Netherlands", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252736/negative-0-_11_rv9i31.jpg",
    tags: ["Netherlands", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252741/negative-0-_4_gqxljv.jpg",
    tags: ["Netherlands", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252758/negative-0-_7_rdyeds.jpg",
    tags: ["Netherlands", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252762/negative-0-_1_vedva8.jpg",
    tags: ["Netherlands", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252765/negative-0-_2_vb1aro.jpg",
    tags: ["belgium", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252792/negative-0-_9_oevlmn.jpg",
    tags: ["Netherlands", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252800/negative-0-_5_yxk31u.jpg",
    tags: ["Netherlands", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1736252768/negative-0-_8_teth4d.jpg",
    tags: ["Netherlands", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560498/negative0-00-22_xoplz0.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560484/negative0-00-23_mkv6ui.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560487/negative0-00-13_h9fnxj.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560488/negative0-00-19_svsir3.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560491/negative0-00-25_f2dsqd.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560482/negative0-00-11_hzw5bh.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560492/negative0-00-15_maopny.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560493/negative0-00-24_vguslf.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560494/negative0-00-7_mcnsfl.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560498/negative0-00-9_tlrs47.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560502/negative0-00-14_cc6i5p.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560503/negative0-00-21_reoi6s.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560503/negative0-00-6_dkdo4q.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560503/negative0-00-1_n04o44.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560506/negative0-00-17_bnmyuk.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560509/negative0-00-20_fjkmv0.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560510/negative0-00-18_jlo0ui.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560512/negative0-00-4_pgcn7f.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560512/negative0-00-3_rwdy0o.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560514/negative0-00-5_tvlcdo.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735560520/negative0-00-16_bghugp.jpg",
    tags: ["Amalfi Coast, Italy", "2024"],
  },

  // ========== 2023 ==========
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1742429436/IMG_3860_2_wvyyqw.jpg",
    tags: ["Coachella", "2023"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1742429436/IMG_3236_qtskuz.jpg",
    tags: ["Coachella", "2023"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1742429436/IMG_3235_w6ma7e.jpg",
    tags: ["Coachella", "2023"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1742429436/IMG_3230_gucwpk.jpg",
    tags: ["Coachella", "2023"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1742429436/IMG_3233_lupxh5.jpg",
    tags: ["Coachella", "2023"],
  },

  // ========== 2022 ==========
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735561196/negative0-00-3_jki47n.jpg",
    tags: ["Hawaii", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735561196/negative0-00-4_ihe38f.jpg",
    tags: ["Hawaii", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735561224/negative0-00-2_dhy0p4.jpg",
    tags: ["Hawaii", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143861/2071030-R1-008-2A_v7ixom.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735144854/2071030-R1-016-6A_ubimgx.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143858/2071030-R1-034-15A_pvvnkh.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143858/2071030-R1-040-18A_objjpg.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735144946/2071030-R1-042-19A_ac62l2.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143855/2071030-R1-038-17A_krxciw.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143854/2071030-R1-028-12A_qpsofo.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735144992/2071030-R1-020-8A_pnee4w.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143854/2071030-R1-004-0A_hmqhoh.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143854/2071030-R1-022-9A_wdemdy.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143854/2071030-R1-044-20A_biwmwz.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143853/2071030-R1-012-4A_gqapwg.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143853/2071030-R1-030-13A_finylm.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143853/2071030-R1-050-23A_fzecxk.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143851/2071030-R1-046-21A_sopqc4.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143851/2071030-R1-048-22A_px02pb.jpg",
    tags: ["SF Bay", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143851/2071030-R1-058-27A_lnxcks.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143849/2071030-R1-002-00A_zwyhcy.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143848/IMG_7330_aigldm.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735145327/2071030-R1-056-26A_ak9cbl.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143848/2071030-R1-000-XA_dldgf1.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735145188/2071030-R1-036-16A_tuvcqk.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143846/2071030-R1-026-11A_u8arsj.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143845/2071030-R1-032-14A_f5rvkt.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735145412/2071030-R1-006-1A_ygolqo.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143844/2071030-R1-010-3A_igdklw.jpg",
    tags: ["Taipei, Taiwan", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143830/Negative0-00-23_wtz5u8.jpg",
    tags: ["SF Bay", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143815/Negative0-00-20_lbrkga.jpg",
    tags: ["SF Bay", "2022"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143808/Negative0-00-0_cegvlt.jpg",
    tags: ["SF Bay", "2022"],
  },

  // ========== 2021 ==========
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143816/Negative0-00-21_qz1up0.jpg",
    tags: ["Chicago", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143836/Negative0-00-6_co4htu.jpg",
    tags: ["Maui, Hawaii", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143832/Negative0-00-18_fdsncy.jpg",
    tags: ["Maui, Hawaii", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143830/Negative0-00-1_x0h9sq.jpg",
    tags: ["Maui, Hawaii", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143824/Negative0-00-11_wofm28.jpg",
    tags: ["Maui, Hawaii", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143808/Negative0-00-9_lkrhta.jpg",
    tags: ["Maui, Hawaii", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143808/Negative0-00-13_sc4eh2.jpg",
    tags: ["Maui, Hawaii", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143808/Negative0-00-2_cygwyz.jpg",
    tags: ["Maui, Hawaii", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143801/Negative-010_monpva.jpg",
    tags: ["Maui, Hawaii", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143804/Negative0-00-24_pxquyc.jpg",
    tags: ["Maui, Hawaii", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143798/Negative-020_hmazn4.jpg",
    tags: ["Maui, Hawaii", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143798/Negative-06_fdglap.jpg",
    tags: ["Maui, Hawaii", "2021"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143840/Negative-0-05_agsbg4.jpg",
    tags: ["San Diego", "2021"],
  },

  // ========== 2020 ==========
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143835/Negative0-00-10_i13i7z.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143834/Negative0-00-3_zqwkc7.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143831/Negative0-00-4_szmvvu.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143824/Negative0-00-15_ptvds8.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143821/Negative0-00-19_gj5qxh.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143819/Negative0-00-5_xczniq.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143814/Negative0-00-16_ycdfnj.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143809/Negative0-00-12_owsw35.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143797/Negative-05_iwvvji.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143797/Negative-07_ae0vhe.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143795/Negative-021_ntljpe.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143793/Negative-011_xvdgfn.jpg",
    tags: ["Tainan, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143792/Negative-019_juvwl4.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143791/Negative-016_dy3ife.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143790/Negative-09_ibsb64.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143786/Negative-08_m1bdvu.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143787/Negative-018_sykkuz.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143786/Negative-015_d8xldz.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143785/Negative-023_ssdloq.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143785/Negative-03_jq6hqg.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143782/Negative-014_exjfai.jpg",
    tags: ["Tainan, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143781/Negative-012_tc5thj.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143777/Negative-01_a5exj7.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143775/Negative-013_axp0fa.jpg",
    tags: ["Tainan, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143774/Negative-017_orubcf.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143774/Negative-024_lccbdb.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735145716/Negative-08_cwyqkj.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143766/Negative-013_pcbm4v.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143764/Negative-022_krck4w.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143764/Negative-01_papxvv.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143763/Negative-017_rpygrm.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143762/Negative-015_cvykxe.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143760/Negative-04_q3gzkp.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143758/Negative-018_tpi0ix.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143758/Negative-024_u7uguw.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143757/Negative-09_qlpejm.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143757/Negative-03_lhhbdr.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143748/Negative-06_v4l20n.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143747/Negative-016_k9fxsk.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143746/Negative-020_fjvoen.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143743/Negative-011_v0afl1.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143743/Negative-023_dghmcq.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143738/Negative-05_xyikfk.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143737/Negative-014_ssgu0c.jpg",
    tags: ["Kenting, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467890/IMG_5220_vib5ia.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467886/IMG_5218_d0ijsk.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467879/IMG_5191_myxcnp.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467876/IMG_5201_zqo8pp.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467876/IMG_5214_ivsovy.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768468970/IMG_5185_cs3kyw.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467892/IMG_5178_wyztzo.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768468907/IMG_5199_jqpodv.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467892/IMG_5209_iwxloh.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467892/IMG_5196_rndpqo.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467902/IMG_5197_jkqs2q.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467899/IMG_5193_l5kcml.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image//f_auto,q_auto,w_1000/v1768467899/IMG_5219_ese317.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467897/IMG_5189_buyuiy.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467895/IMG_5221_xbycgm.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467907/IMG_5180_xmaeny.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467906/IMG_5190_a8wb8q.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467906/IMG_5203_bzszbq.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467904/IMG_5181_basprm.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467912/IMG_5174_adcges.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467912/IMG_5198_g15d3b.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467910/IMG_5222_tq3b4v.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467911/IMG_5217_t5f0ma.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467917/IMG_5205_eveeek.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467915/IMG_5182_uh0kem.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467914/IMG_5195_eypdlk.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467915/IMG_5188_uxhnvb.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467922/IMG_5179_c84qct.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467919/IMG_5177_a4zkwc.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768467917/IMG_5210_ejyx24.jpg",
    tags: ["Taipei, Taiwan", "2020"],
  },

  // ========== 2019 ==========
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143846/Negative-0-025_iqzdws.jpg",
    tags: ["Seattle", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143842/Negative-0-021_zfyusc.jpg",
    tags: ["Seattle", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143722/Negative0-24-21A_1_cdcpmg.jpg",
    tags: ["Hong Kong", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143722/Negative0-18-15A_1_d0dr8l.jpg",
    tags: ["Hong Kong", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143721/Negative0-23-20A_1_zun2aw.jpg",
    tags: ["Hong Kong", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143719/Negative0-25-21A_1_inm2f8.jpg",
    tags: ["Hong Kong", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143718/Negative0-02-00A_1_ycyfba.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143717/Negative0-19-16A_1_vg1yhc.jpg",
    tags: ["Hong Kong", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143717/Negative0-08-5A_1_pe6ifx.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143717/Negative0-22-19A_1_ttzd13.jpg",
    tags: ["Hong Kong", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143716/Negative0-18-14A_1_vgumly.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143716/Negative0-26-22A_1_ou2djh.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143715/Negative0-20-16A_1_y6auin.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143714/Negative0-13-9A_1_o8hhy9.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143714/Negative0-15-11A_1_mdgbr7.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143713/Negative0-25-25A_1_cl5ka9.jpg",
    tags: ["Hong Kong", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143712/Negative0-11-7A_1_igjqm6.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143712/Negative0-12-8A_1_vcwhxy.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143711/Negative0-20-17A_1_uj6hdg.jpg",
    tags: ["Hong Kong", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143710/Negative0-17-13A_1_mk2kns.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143709/Negative0-16-12A_1_jxkw5z.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143706/Negative0-10-6A_1_gnhbws.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143704/Negative0-24-20A_1_cy12py.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143704/Negative0-21-17A_1_fybsub.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143702/Negative0-22-18A_1_efvmow.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143703/Negative0-09-6A_1_ijg9sm.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143700/Negative0-08-4A_1_zkc0co.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464563/IMG_7437_qc2xf3.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464562/IMG_7442_lfalij.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768465017/IMG_7444_zeeoie.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464562/IMG_7435_uhhauw.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464562/IMG_7430_nqgqdi.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464568/IMG_7441_qsi1lz.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464567/IMG_7439_f2ev8g.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464567/IMG_7431_hia7bo.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464565/IMG_7428_kholv1.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464583/IMG_7440_pc3nnx.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768465169/IMG_7447_ob8inq.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464592/IMG_7449_skihsa.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464591/IMG_2225_kjmqhd.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464589/IMG_7434_ak6ny8.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464587/IMG_7427_jkwrhl.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464587/IMG_7448_tnnvwg.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/v1768464586/IMG_7429_piqzkp.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464594/IMG_4269_oprlpm.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464593/IMG_7450_bc86wk.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464593/IMG_4259_iuuqte.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464593/IMG_2226_mtvhza.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464598/IMG_4267_dstrhw.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464597/IMG_2222_cxqqtg.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464595/IMG_2227_v6ek8i.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464594/IMG_4264_y0vhx1.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464600/IMG_7446_hnwuzz.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768465557/IMG_4263_pltack.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464599/IMG_4257_z5c3nm.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464598/IMG_4258_mbazku.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464603/IMG_4256_rbo1px.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464602/IMG_2228_ucod9i.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464601/IMG_2223_z2rm9i.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1768464600/IMG_4260_vnii00.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143699/Negative0-23-19A_1_jvnn4f.jpg",
    tags: ["Seattle", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143699/Negative0-09-5A_1_bdyykm.jpg",
    tags: ["Taipei, Taiwan", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143349/4098-03_xxgtwa.jpg",
    tags: ["Seattle", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143349/4098-01_sw3rgb.jpg",
    tags: ["Seattle", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143348/4098-02_o90grq.jpg",
    tags: ["Portland", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143347/4098-17_plnawi.jpg",
    tags: ["Seattle", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143346/4098-07_rxjf3y.jpg",
    tags: ["Portland", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143346/4098-08_mbyxl0.jpg",
    tags: ["Seattle", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143344/4098-11_qtq99q.jpg",
    tags: ["Seattle", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143341/4098-04_ocpj5n.jpg",
    tags: ["Portland", "2019"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143341/4098-16_cmgpbc.jpg",
    tags: ["Seattle", "2019"],
  },

  // ========== 2018 ==========
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143339/4098-12_qcgd9v.jpg",
    tags: ["Seattle", "2018"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143338/4098-13_ihuc35.jpg",
    tags: ["Seattle", "2018"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143252/4097-12_llzo5y.jpg",
    tags: ["Seattle", "2018"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143246/4097-08_rqkmjg.jpg",
    tags: ["Seattle", "2018"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143246/4097-02_rlzycx.jpg",
    tags: ["Seattle", "2018"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143246/4097-07_ocpzyg.jpg",
    tags: ["Seattle", "2018"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143244/4097-20_rey5oc.jpg",
    tags: ["Seattle", "2018"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143241/4097-01_trajdr.jpg",
    tags: ["Seattle", "2018"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143242/4097-11_tfehu0.jpg",
    tags: ["Seattle", "2018"],
  },
  {
    url: "https://res.cloudinary.com/dekqt2ngb/image/upload/f_auto,q_auto,w_1000/v1735143240/4097-03_sa7ffc.jpg",
    tags: ["Seattle", "2018"],
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

class FilterInstructions {
   constructor(
      spray="spray instructions",   // spray
      stamp="stamp instructions",   // stamp
      check="check instructions",   // check
   ) { 
      this.spray = spray
      this.stamp = stamp
      this.check = check
   }
}

class Dimensions {
   constructor(x=0, y=0) {
      this.x = x
      this.y = y
   }
   toString() { return `${this.x}"x ${this.y}"` }
}

const data = {
   todoItems: [
      {
         id: 1,
         title: "Go to Market",
         description: "Buy ingredients to prepare dinner",
         completed: true,
      },
      {
         id: 2,
         title: "Study",
         description: "Read Algebra and History textbook for the upcoming test",
         completed: false,
      },
      {
         id: 3,
         title: "Sammy's books",
         description: "Go to library to return Sammy's books",
         completed: true,
      },
      {
         id: 4,
         title: "Article",
         description: "Write article on how to use Django with React",
         completed: false,
      },
   ],
   filterBible: {
      3007: {
         instructions: new FilterInstructions(
            "do this idk      ",   // spray
            "some more stuff  ",   // stamp
            "wowiee           "    // check
         ),
         actualSize: new Dimensions(17.5, 8.5),
         googleDrivePictureURLs: [
            "https://drive.google.com/file/d/1A5wF1HnsLlBA7G5zJQSZO0s8vRlgxttZ/view?usp=sharing",
         ]
      },
      3117: {
         instructions: new FilterInstructions(
            "spray instructions 3117",   // spray
            "stampy stampy    ",   // stamp
            "check my swag    "    // check
         ),
         actualSize: new Dimensions()
      },
      default: {
         instructions: new FilterInstructions(
            "spray instructions",   // spray
            "stamp instructions",   // stamp
            "check instructions"    // check
         ),
         actualSize: new Dimensions()
      },
      get: function(key) {
         if (this[key] !== undefined) return this.default
         return this[key]
      }
   },
   googleDriveImageShareLinks: [
      "https://drive.google.com/file/d/1-MANyWHrxdssT5L1s3gOGsz5SaPP5ApF/view?usp=sharing", 
      "https://drive.google.com/file/d/1-Nocx_ZltvLvafxROaQ2k__je-s6EYAz/view?usp=sharing", 
      "https://drive.google.com/file/d/1-TteAV7GDHnDpVEcVvQ_8vHA54kaNWAM/view?usp=sharing", 
      "https://drive.google.com/file/d/10KYdgFiZZIhjJ5cg8xONRUHEDtX_45dS/view?usp=sharing", 
      "https://drive.google.com/file/d/11PrXP3_qgjsNGkbxEl4lHwtNREnnnh1K/view?usp=sharing", 
      "https://drive.google.com/file/d/11y9jFnjaKHasVy4BjlehQ6EiiBdonSrx/view?usp=sharing", 
      "https://drive.google.com/file/d/12DDL2oXLPFoXXKUG2s_jZoo8XcJIxG8y/view?usp=sharing", 
      "https://drive.google.com/file/d/12fZC9D_L0eK1i5e5D0ZY-Gr0l6k_a9qJ/view?usp=sharing", 
      "https://drive.google.com/file/d/12hljZViVM_AJr-vrfrDP7uPqCIe8bFYL/view?usp=sharing", 
      "https://drive.google.com/file/d/131iiYoSi4pTrOE-V0x0sYy0eGxtCEdjE/view?usp=sharing", 
      "https://drive.google.com/file/d/13SO2wlzv7VMAKU7VnGOP_x7BWvCM7pqh/view?usp=sharing", 
      "https://drive.google.com/file/d/13_nZrA-An8icHjgIicQKS1RlttyfDB6G/view?usp=sharing", 
      "https://drive.google.com/file/d/13niXXl1SyiShJieHoj8Mbvl6DGEXkiJA/view?usp=sharing", 
      "https://drive.google.com/file/d/13qoSoDzlBl7xwkTQFQpxfOekrQReQB7J/view?usp=sharing", 
      "https://drive.google.com/file/d/13wWLHkz2PkKdGTj6h6ll-rvahZh_Jfnz/view?usp=sharing", 
      "https://drive.google.com/file/d/13xvPd2weDHrEgm3oDHVA4pd48kY0iYJH/view?usp=sharing", 
      "https://drive.google.com/file/d/13ySCq4VvID629lvT2Y16Mwqvd7B1YzaS/view?usp=sharing", 
      "https://drive.google.com/file/d/14Dkbn5egXDlFH9x2tKUmay_mF7lLqKCc/view?usp=sharing", 
      "https://drive.google.com/file/d/14L3itniiZprACE2Yo5IxCpB9RcOxNqpr/view?usp=sharing", 
      "https://drive.google.com/file/d/15BOpvwX9BkEcBJuFrSxR0aVmJAeNDmil/view?usp=sharing", 
      "https://drive.google.com/file/d/15Gc_lGqgKpZpd4Co7muf7GV7SfLdue5p/view?usp=sharing", 
      "https://drive.google.com/file/d/16IGx8XjFwn5fVL38KKKlKgHlzlBSaMPi/view?usp=sharing", 
      "https://drive.google.com/file/d/16QbaAt2gMaVY8yKxhfSXqKuopoIA1aAx/view?usp=sharing", 
      "https://drive.google.com/file/d/16cznrIjBf8SuJDSZSoppvxunPnk0uSVE/view?usp=sharing", 
      "https://drive.google.com/file/d/16dxTs0aOo3j6DMB8IWHay4YUdMOmxrsH/view?usp=sharing", 
      "https://drive.google.com/file/d/16iVHZ-RCDN_FYB_K6HheUWj172dN39k1/view?usp=sharing", 
      "https://drive.google.com/file/d/16uC6dpe5RMR5xlx13WXKk1tBQsprRw50/view?usp=sharing", 
      "https://drive.google.com/file/d/17JaUm5n79bI0KvkuQSaHemTWLiE7SGFF/view?usp=sharing", 
      "https://drive.google.com/file/d/17OV3iMHGShcZocCn4H0zR3Edn58nlt4N/view?usp=sharing", 
      "https://drive.google.com/file/d/17ni2Tj5YuTAIqlt2X1B0YGTQKTvSt6Zf/view?usp=sharing", 
      "https://drive.google.com/file/d/1883_N2-BAzchUnpuArV94J95d24JkB6U/view?usp=sharing", 
      "https://drive.google.com/file/d/18HdU7ixcNm9S2KYRuXy0nZCo6NmBj5Il/view?usp=sharing", 
      "https://drive.google.com/file/d/18xOweIqdaUK_ihHJd7a3Q7xmbqGhIWgO/view?usp=sharing", 
      "https://drive.google.com/file/d/18y67-Jz74nXv2MpjUwGkP2ruCDopriIK/view?usp=sharing", 
      "https://drive.google.com/file/d/1A-DmwXrmEMleuxIXtclaJUvCRQ-cKcAa/view?usp=sharing", 
      "https://drive.google.com/file/d/1A5wF1HnsLlBA7G5zJQSZO0s8vRlgxttZ/view?usp=sharing", 
      "https://drive.google.com/file/d/1ADiaac3Z5Ws1TB9pd0Zf_2MYnrM3fZLF/view?usp=sharing", 
      "https://drive.google.com/file/d/1AIapLNZVVfwgc05uL_Ut43GsxeNc90s_/view?usp=sharing", 
      "https://drive.google.com/file/d/1AeptvT_H9G8Gkg8YBL5PYqbH6bHBrhgu/view?usp=sharing", 
      "https://drive.google.com/file/d/1AxGSo5eNrGi2DIbUKGq_ws-VmsmLaICV/view?usp=sharing", 
      "https://drive.google.com/file/d/1B-aGKxKaJisqlovVf87xPa0eaYTK0PE2/view?usp=sharing", 
      "https://drive.google.com/file/d/1BDViXOuUDoPgFYW-GzFfOrSaYj6M-SVU/view?usp=sharing", 
      "https://drive.google.com/file/d/1BK_KcEKf0vullOfeT3d3GpUanMv2r7ui/view?usp=sharing", 
      "https://drive.google.com/file/d/1BO1YWKEB3hgFuLr0C0FoV4O_M4eWMDvE/view?usp=sharing", 
      "https://drive.google.com/file/d/1CM3kaD7cI6qbpUYekQjpTQYDz4uOyaZO/view?usp=sharing", 
      "https://drive.google.com/file/d/1C_A1JTn2t1k511_UKSNsy6SWbXM9dqdL/view?usp=sharing", 
      "https://drive.google.com/file/d/1CaGmbC0tHV7aWd0relhCDf31OpkHBSh9/view?usp=sharing", 
      "https://drive.google.com/file/d/1Cl6y0oDhJa2edGw0FcXmvoEw9ZPaLYow/view?usp=sharing", 
      "https://drive.google.com/file/d/1CvrsmO2ib47u0XqyNDvbdEPADyhEyyKU/view?usp=sharing", 
      "https://drive.google.com/file/d/1DKduyw21ORqhRLgNcKsDyw8k8Mbaf-aA/view?usp=sharing", 
      "https://drive.google.com/file/d/1DQeh-U_iSQ1mrUqRGvMQQXrM0NX0ZqQT/view?usp=sharing", 
      "https://drive.google.com/file/d/1DaGa2aMwgehK_kLg2QQXEZ6nXm6I0jdo/view?usp=sharing", 
      "https://drive.google.com/file/d/1EKflOBpMfHwReG6O3bGw0KBvDFBrcg-W/view?usp=sharing", 
      "https://drive.google.com/file/d/1ESLYYdO5tjGYdRgGiAdVRr2p7FCouNIL/view?usp=sharing", 
      "https://drive.google.com/file/d/1EyorC3K4c4xTo-euLBm7OsrkEJO6WGZk/view?usp=sharing", 
      "https://drive.google.com/file/d/1F2U6NLxMl4Jbon-HVGuHLYI4HRotv91b/view?usp=sharing", 
      "https://drive.google.com/file/d/1FiaqW1IjTbXwJQ71djUZqCyhELRPl6ox/view?usp=sharing", 
      "https://drive.google.com/file/d/1FkQSWCmb83c6Cq6N3WjzmRy0wlok8rZo/view?usp=sharing", 
      "https://drive.google.com/file/d/1FqcKUhZT1pFjGtxgAPvrxhBx0TiR8tZE/view?usp=sharing", 
      "https://drive.google.com/file/d/1Fs1W59g6-YCxszTqqdyEZz4u-7x4fBqR/view?usp=sharing", 
      "https://drive.google.com/file/d/1G6K43QtJw-kW0SV_0FPGYVH-ympqbDXY/view?usp=sharing", 
      "https://drive.google.com/file/d/1GW4fhLDxSW3Wa4cVsODmLb6ezp3KRRis/view?usp=sharing", 
      "https://drive.google.com/file/d/1GeuwX3IcC0Oxt5apMlTaLRdZ5mey8jX_/view?usp=sharing", 
      "https://drive.google.com/file/d/1HLHuU8LN71oTpRTioS3uyGXLZwNTY69c/view?usp=sharing", 
      "https://drive.google.com/file/d/1Hfvj_zR39IIwJpLMBbZNJ33I9Ar0S-Vp/view?usp=sharing", 
      "https://drive.google.com/file/d/1HsOFvMBN6KGnd4diWpE2VX8qO3W2noYv/view?usp=sharing", 
      "https://drive.google.com/file/d/1HxHsaWDKzFSG-NndDNlv2QyruZsjZwn4/view?usp=sharing", 
      "https://drive.google.com/file/d/1ILtUHzrf-4py_k_rAb_M5cCUPO6gbS9l/view?usp=sharing", 
      "https://drive.google.com/file/d/1ITfauG2_-bfx3K0hTBXNF_yKEGZMCIsI/view?usp=sharing", 
      "https://drive.google.com/file/d/1IU3A2GekO0YY__yjA1k-zKip-xPmHmrD/view?usp=sharing", 
      "https://drive.google.com/file/d/1IgINIGlzQkVptEqk2zgrBzQxrUs8VNx8/view?usp=sharing", 
      "https://drive.google.com/file/d/1Ihop5Cfe-OLV5KvA0MmSzYMs4q-bageF/view?usp=sharing", 
      "https://drive.google.com/file/d/1JCLZBllqAqJ7IPryXtghiTC44MwzJUD4/view?usp=sharing", 
      "https://drive.google.com/file/d/1JMdHAqx3HOOBdOiRmMzfpQlrtXA-baP2/view?usp=sharing", 
      "https://drive.google.com/file/d/1JPq9PFcPYEjJ8gPVcHThY7qm9CDoxd0J/view?usp=sharing", 
      "https://drive.google.com/file/d/1JwaNq-bXTgwoxye_2P9caie0RncXHNWP/view?usp=sharing", 
      "https://drive.google.com/file/d/1KWoChJZU4QVgPXDDWYDcxQo3Oqy4ufjm/view?usp=sharing", 
      "https://drive.google.com/file/d/1Kc17Exsto4kO6B5zU1bJoaNhrWFUw9tP/view?usp=sharing", 
      "https://drive.google.com/file/d/1LA8d67i_aP-EQC290V_y04f2DS8I-MK8/view?usp=sharing", 
      "https://drive.google.com/file/d/1LG9fikuiV1hK1g0f2-ajBcfacyA24ycy/view?usp=sharing", 
      "https://drive.google.com/file/d/1LO3qXdemx5IPbDg4O3nyAmsaAgdRuJKY/view?usp=sharing", 
      "https://drive.google.com/file/d/1LPBy4fWnucGYu9uRbi14VWC9Zn8RvJmK/view?usp=sharing", 
      "https://drive.google.com/file/d/1LZux2mCWZozz9uh-ay1Gy1VBB97-vHLJ/view?usp=sharing", 
      "https://drive.google.com/file/d/1LcnPaxbxju9F5KXruC3mAplYKVafYxQD/view?usp=sharing", 
      "https://drive.google.com/file/d/1Ld0UwxDMc0RdRV8aRDWPl21nOBvkybpr/view?usp=sharing", 
      "https://drive.google.com/file/d/1MTF-HCl3xamjZSAKoSzr5owC0VQC6EF8/view?usp=sharing", 
      "https://drive.google.com/file/d/1MW80WlqivEL8xsxeKz4_olGQyko0_H9w/view?usp=sharing", 
      "https://drive.google.com/file/d/1Mb2W1H6eDjXUcJEWW418uNclmGtrq54J/view?usp=sharing", 
      "https://drive.google.com/file/d/1Mb308NLJgG-bxXhtrW4rxzSLhVVASIIB/view?usp=sharing", 
      "https://drive.google.com/file/d/1MfCc-EXUUJtVoNpMWYFKXs07N-JqMEtJ/view?usp=sharing", 
      "https://drive.google.com/file/d/1Ms0wDzO-Xs1wjUHVwRSbnhsczJntD9na/view?usp=sharing", 
      "https://drive.google.com/file/d/1NAi00ZniCNirSnBxwa5Gb_5Nu8M0VAf-/view?usp=sharing", 
      "https://drive.google.com/file/d/1NQhjysLp93I4vV_3J7DZzlv6kWkiLX4_/view?usp=sharing", 
      "https://drive.google.com/file/d/1NXNFI_FaSSKg3WR7NMDC-N-SRqdo8zHd/view?usp=sharing", 
      "https://drive.google.com/file/d/1NbgVSQpkht8irUynX5fbuCNYMYHJmwPy/view?usp=sharing", 
      "https://drive.google.com/file/d/1Ni2qYAbmqd220NI8XuVK4aTFuGgdrWZF/view?usp=sharing", 
      "https://drive.google.com/file/d/1O10EHUdPPwlnVYH9FGumdbdTN8eKmbq0/view?usp=sharing", 
      "https://drive.google.com/file/d/1ODvLhuo2Vm4ns3IZFY-4tPCbS2zMVxla/view?usp=sharing", 
      "https://drive.google.com/file/d/1P8vcWu0xUe92IF-h1M_3-rqY95LxD2vI/view?usp=sharing", 
      "https://drive.google.com/file/d/1P9Wvj721UwY5uKozZg_Xjiytwq8_CLAM/view?usp=sharing", 
      "https://drive.google.com/file/d/1PMJ6Po6V2ffEDm3ghtUfB_iUYCDHc6vM/view?usp=sharing", 
      "https://drive.google.com/file/d/1PbZ2o422i6BSmYHLPUk2G3H9hY_DsJ3v/view?usp=sharing", 
      "https://drive.google.com/file/d/1PcEukGFP8ubYYxwMelL91oRuBY6ENXGu/view?usp=sharing", 
      "https://drive.google.com/file/d/1PcW5gEtXaxDNli-DhWmeTuUphhFClIvF/view?usp=sharing", 
      "https://drive.google.com/file/d/1PyXCVLC19VdbveKR_fb5V6WGcac1N0YM/view?usp=sharing", 
      "https://drive.google.com/file/d/1QHkorXdPs22G5-jnhm_vUYVIMEtogg5J/view?usp=sharing", 
      "https://drive.google.com/file/d/1Qa7XdHJmyfCfWDpRWlDPvA_jQVoBJxAJ/view?usp=sharing", 
      "https://drive.google.com/file/d/1QacBqHjJnMM-zEYvee4u5Ds0qoKEQrdI/view?usp=sharing", 
      "https://drive.google.com/file/d/1QeDlEI4tDYAn4eszJ_B6XpqA2AOWRGen/view?usp=sharing", 
      "https://drive.google.com/file/d/1Qf5ZGQBZhX3ogOh0Iel2Kc0o3Px7VfVW/view?usp=sharing", 
      "https://drive.google.com/file/d/1QmceJUG-zis6gQQmFbAAkHqhTM2PtKSR/view?usp=sharing", 
      "https://drive.google.com/file/d/1R1hI3MDqXvOAwhFtw9o2q3aPrW-y2K6v/view?usp=sharing", 
      "https://drive.google.com/file/d/1ReN-XmDsxMNs2ODPnuy0UUhS81p8IW4h/view?usp=sharing", 
      "https://drive.google.com/file/d/1Rg-vtLa8w_uZ9gdj_b-pVVKGX0xupjOx/view?usp=sharing", 
      "https://drive.google.com/file/d/1Rud_ppaTFFzrcWekyllCVDsLEvT4ApNj/view?usp=sharing", 
      "https://drive.google.com/file/d/1S8NamJBcmI7ygK1aeycnAjcLUZz8ONbp/view?usp=sharing", 
      "https://drive.google.com/file/d/1SI9JqZElg9SIMBrnM_MDx44P8WJaAsp6/view?usp=sharing", 
      "https://drive.google.com/file/d/1S_Tmt43_b0SpXpEkLqWxh2JExg-k9SkN/view?usp=sharing", 
      "https://drive.google.com/file/d/1Skhs60nJ4T5UotKKsUs_ZS_dih09E1Yk/view?usp=sharing", 
      "https://drive.google.com/file/d/1Sz9rIKDfa6QqkEjp9fzBAk69yLA2fMwj/view?usp=sharing", 
      "https://drive.google.com/file/d/1TTqUL-_0zaj6xBbHGUWPoWxrhsV3Ytx1/view?usp=sharing", 
      "https://drive.google.com/file/d/1TuGVDwP4x-56ZDU6-NMMcygVBxMYT737/view?usp=sharing", 
      "https://drive.google.com/file/d/1U1UjCSZflNMM4T0ZRNzRdOPxnFRuZNfC/view?usp=sharing", 
      "https://drive.google.com/file/d/1U7y1g7vzsOFBcBEzW1lXPpCwZ2eQGIkb/view?usp=sharing", 
      "https://drive.google.com/file/d/1U96D3MMs0to7aLAOs6-kVc5RKdK7OGhr/view?usp=sharing", 
      "https://drive.google.com/file/d/1UG3jE_znXK2MXs0UcCC8lgQLkIDgtHTR/view?usp=sharing", 
      "https://drive.google.com/file/d/1UVkA9atmMqPSjXGWIVSwNXIJ8hV2m_Uz/view?usp=sharing", 
      "https://drive.google.com/file/d/1UkSsTlDtaBjDTitmxvx4H8ew6t2Gpkeo/view?usp=sharing", 
      "https://drive.google.com/file/d/1VtitwQoa3Z34nFmeDcDzNOzpuDDVFaeu/view?usp=sharing", 
      "https://drive.google.com/file/d/1W1OFIKgGu1j2C6QEsaB5NELxSEDn0qPv/view?usp=sharing", 
      "https://drive.google.com/file/d/1W466VCKe_O_aQdRJxcpspCugBa-bZRIA/view?usp=sharing", 
      "https://drive.google.com/file/d/1WNxUeCGuqznscVRuvfH84axnkNt9SWtK/view?usp=sharing", 
      "https://drive.google.com/file/d/1WeQlTYaJxBWj6HUYhwvWhRZiGJsuUpXo/view?usp=sharing", 
      "https://drive.google.com/file/d/1WpmSFZuYQFhNiMo2grznj6imDtsNk7Ue/view?usp=sharing", 
      "https://drive.google.com/file/d/1WtXtCTWWz8VdXWsH7_E5hTu5iNIgddn-/view?usp=sharing", 
      "https://drive.google.com/file/d/1X0NsxNGxVSXYTP8S0NriiWw8NdD2pp_v/view?usp=sharing", 
      "https://drive.google.com/file/d/1XF57ySfpX6uM-aJhKk2zHyLDsXZQ520R/view?usp=sharing", 
      "https://drive.google.com/file/d/1XNG-kZ3aNM4eSF2jQg6sXmUMu-64_Sqh/view?usp=sharing", 
      "https://drive.google.com/file/d/1XPeWQfJLY5Lszjv2bgyqKTw3SPWxqLS7/view?usp=sharing", 
      "https://drive.google.com/file/d/1YKCthB5hkXY0qaMuwt0eNpkcSwMUSBYL/view?usp=sharing", 
      "https://drive.google.com/file/d/1YRLqgx5StZ8OazoRIj3Lv7tpc_FD3muy/view?usp=sharing", 
      "https://drive.google.com/file/d/1YtFouxp8-avdQdggi5xssvn6mnKQ0jrP/view?usp=sharing", 
      "https://drive.google.com/file/d/1Yuxc3_SrixHH6vu_k9ytZVMtKZ9RUU5B/view?usp=sharing", 
      "https://drive.google.com/file/d/1ZQYP1rpG4Ypyq-XbABF9ChMKrf4EZdOE/view?usp=sharing", 
      "https://drive.google.com/file/d/1ZYhPHIieEDA9C9hCKCsPnpU6eMu4RU8v/view?usp=sharing", 
      "https://drive.google.com/file/d/1ZZ8AU9Z18rAetoVULYFvbLjU36RFO1jN/view?usp=sharing", 
      "https://drive.google.com/file/d/1ZqRby0EHbE4wBbdvs953h8mBPm-aLlEu/view?usp=sharing", 
      "https://drive.google.com/file/d/1_KzbmV78IzEXFqxGhwRlXKXExmb6Pn-s/view?usp=sharing", 
      "https://drive.google.com/file/d/1_W6FFkfmkN-JishATC0Kr0ZHjUyLuXhM/view?usp=sharing", 
      "https://drive.google.com/file/d/1_mIbQQfiqakObed274VYq-aCWbn1eGZW/view?usp=sharing", 
      "https://drive.google.com/file/d/1_nVutP5_VK3C0qJpH1fDfeGrIs29y-sc/view?usp=sharing", 
      "https://drive.google.com/file/d/1a5W1CAjr3sw5Br2_Ej1H2mm6I0-10rPT/view?usp=sharing", 
      "https://drive.google.com/file/d/1aAJ07X2IN2i6k1n-GJhYoVSJcuWdaCIx/view?usp=sharing", 
      "https://drive.google.com/file/d/1aHAarca_tDIa2oqNy7aJ6w1xIflpQqRW/view?usp=sharing", 
      "https://drive.google.com/file/d/1bM-yJdR7ZrpSb5lf4BWgvJB7bEx8JG5o/view?usp=sharing", 
      "https://drive.google.com/file/d/1baTX8D-aJfEgDk6SReGsLFa1u9u1VCKD/view?usp=sharing", 
      "https://drive.google.com/file/d/1cESVEKYHgH2uBemHeLNkTFdKsABYNJ56/view?usp=sharing", 
      "https://drive.google.com/file/d/1cewzMB483XAhToYJCX7wMetex_Cmvwoi/view?usp=sharing", 
      "https://drive.google.com/file/d/1chJjDQxVFHEKKV_d6E0g_ugTw4m5ECmj/view?usp=sharing", 
      "https://drive.google.com/file/d/1cikE3uWCL5VHZTLvt8XHlOKS-D77pkYV/view?usp=sharing", 
      "https://drive.google.com/file/d/1cmcrxTw5zFFfa4A7v6KO7rVWSgcH7u2z/view?usp=sharing", 
      "https://drive.google.com/file/d/1dTzLn6lZnHnpFifyvT1CpE990gDxcLxB/view?usp=sharing", 
      "https://drive.google.com/file/d/1dYgmVeECJMqpX0TbLomVCu2ey_j_TDVn/view?usp=sharing", 
      "https://drive.google.com/file/d/1duU-pyr5AyQX-SZMNl6DIllEet2ZlFLs/view?usp=sharing", 
      "https://drive.google.com/file/d/1e8K-xIv1b4EM3p2DK-ClVhwOzc52zdxA/view?usp=sharing", 
      "https://drive.google.com/file/d/1eNMnzGhnga_Jn2hPGyM4bWOcH6R_r74r/view?usp=sharing", 
      "https://drive.google.com/file/d/1eTpDgoqvbyTkxk2ZAD8ZX2Uj9J2mIn_q/view?usp=sharing", 
      "https://drive.google.com/file/d/1eu_qFQJR9Xe0UBL0BzkGoKL7WV1ntZ7w/view?usp=sharing", 
      "https://drive.google.com/file/d/1fhJKJSKtD94ihKMcBWOpMrz1UOteeCjB/view?usp=sharing", 
      "https://drive.google.com/file/d/1giaAQsZM9CqisEP8iSaIsGpDW_OLQDgK/view?usp=sharing", 
      "https://drive.google.com/file/d/1gjNfCs8gSEddFvZQGJCHOtqnIgHk1ebQ/view?usp=sharing", 
      "https://drive.google.com/file/d/1goRRcK-wD9C3CCinsmY18U3LVlVFXfAu/view?usp=sharing", 
      "https://drive.google.com/file/d/1gpS6uKGE5zdpW1dlBAd0f1XS4Y0-SwaY/view?usp=sharing", 
      "https://drive.google.com/file/d/1grdIJHoSGv_fPwM52DWyi2ZMOotp9frW/view?usp=sharing", 
      "https://drive.google.com/file/d/1h0EhOCC5eoI3fdUjGdanll_BJ76jh18U/view?usp=sharing", 
      "https://drive.google.com/file/d/1hHcHCoyhEgEKfxybu0nSsynkLcG5kcZz/view?usp=sharing", 
      "https://drive.google.com/file/d/1hJQauPRmyDS6potLNqMV5En_RIB9CSUR/view?usp=sharing", 
      "https://drive.google.com/file/d/1iRwUsFtrLhSvXTWtay5JJ3EnB34zstBc/view?usp=sharing", 
      "https://drive.google.com/file/d/1iqZHlkryXwcPB3jIkyK-OnOT7Q-L7MXh/view?usp=sharing", 
      "https://drive.google.com/file/d/1j02B28l0htYnCgymfVleezUXFAb3uzcw/view?usp=sharing", 
      "https://drive.google.com/file/d/1j3GRYPh2e_7t9QlQO2JcB4yJwz_HAGjx/view?usp=sharing", 
      "https://drive.google.com/file/d/1j7XFxSNLP9-OwgcuhVEY--0fXkp-aalH/view?usp=sharing", 
      "https://drive.google.com/file/d/1j8GTljZEdrZSMsneznMrR1SNZKZuaaC6/view?usp=sharing", 
      "https://drive.google.com/file/d/1jMggGSEZzK7t8k9D5ZFwVOSvIW8APxAh/view?usp=sharing", 
      "https://drive.google.com/file/d/1jq_Kkv2_s-fEio2jgzl93mpyr9na3Pd-/view?usp=sharing", 
      "https://drive.google.com/file/d/1juiRssgTP_XeT-nYrBYA8QpnZvlG79Yp/view?usp=sharing", 
      "https://drive.google.com/file/d/1l3yCpl1ktiIKnC51CPg023gTvDd8Iavj/view?usp=sharing", 
      "https://drive.google.com/file/d/1lBKzHoa87shj99PFr3hhFI23gQy1Yg2K/view?usp=sharing", 
      "https://drive.google.com/file/d/1lD1ZYCcoz8NcTK1H4wncLiMB9bJbtEEf/view?usp=sharing", 
      "https://drive.google.com/file/d/1lNzkZc6lIHFZx0SIMolE0kF_NdWi4Jxe/view?usp=sharing", 
      "https://drive.google.com/file/d/1ltl4rsS0Zw4mj-vTxIWJaU-OstHgBD4_/view?usp=sharing", 
      "https://drive.google.com/file/d/1mKfHKbC-Rmope-THFsfGXB7oTBMxObPi/view?usp=sharing", 
      "https://drive.google.com/file/d/1mN0aVQ4K8NxvcMtCMHmOi6KVc4KGv4Jb/view?usp=sharing", 
      "https://drive.google.com/file/d/1mqFQ4c7ScRZPOMdS0Tk4Gj1z5KdnSEh-/view?usp=sharing", 
      "https://drive.google.com/file/d/1n2RlIX-a_lAHBGK1gYJpOTxxEltaTJGp/view?usp=sharing", 
      "https://drive.google.com/file/d/1nBlL-DPR3k886J7Lt4fOutY0vA7pBPRZ/view?usp=sharing", 
      "https://drive.google.com/file/d/1nEDFRd2FzjOntPPVF0HGYvVkGKb7p06r/view?usp=sharing", 
      "https://drive.google.com/file/d/1nIRqVgG_w9JEpG5UgFajLaqmhjz1I9JG/view?usp=sharing", 
      "https://drive.google.com/file/d/1nUnfjBiHI73ivWF4dPxRvp2dsONNH_5B/view?usp=sharing", 
      "https://drive.google.com/file/d/1nVfGc2Dtqg9C2S-xLvHpiA9NAEjUZra6/view?usp=sharing", 
      "https://drive.google.com/file/d/1nXuw4o_iaADrrE9IuQb8eC96PzZ8_A9l/view?usp=sharing", 
      "https://drive.google.com/file/d/1oCAYuD0kvxXYElEJpAWEb5F_o3hh6bZu/view?usp=sharing", 
      "https://drive.google.com/file/d/1oKCC_6RaROjldrvejTaBbfZOOb-R6j_K/view?usp=sharing", 
      "https://drive.google.com/file/d/1pNgFH4LGHQxKQHcbCEJOi5yn_uPcHgZ-/view?usp=sharing", 
      "https://drive.google.com/file/d/1qR6reVX75-o0pnrURT5aIQLNAMpGENX2/view?usp=sharing", 
      "https://drive.google.com/file/d/1qUJ73D46jnxMtPcEvyVmnT_UQby2ZzXv/view?usp=sharing", 
      "https://drive.google.com/file/d/1qV1H37gPKxcRmCDo7nyW0jYWjIqPg2w7/view?usp=sharing", 
      "https://drive.google.com/file/d/1qVeDuK4QGnBQ-PECX_e8IO7Rfb-vE7qk/view?usp=sharing", 
      "https://drive.google.com/file/d/1qeAkWuh83fto7BfheMA_sO65EbpUzBUi/view?usp=sharing", 
      "https://drive.google.com/file/d/1r1XY2DpjqvgWzg9qTsQEXA8WiGk5vDLZ/view?usp=sharing", 
      "https://drive.google.com/file/d/1r6yy8O6K8mGy9RijpdYc6GJvTNB08Djj/view?usp=sharing", 
      "https://drive.google.com/file/d/1rQDTGQlfyDy_6XavbW8RAq4IMBs89BVI/view?usp=sharing", 
      "https://drive.google.com/file/d/1s0Yo-UE6tPuq0KXNJRDxpJ60PzFnADMz/view?usp=sharing", 
      "https://drive.google.com/file/d/1s1dDMRI4br2R3ZpK-vhm8E22wHRnbH-l/view?usp=sharing", 
      "https://drive.google.com/file/d/1sNPTVylDtWforid77piedIM-Xqunkdd-/view?usp=sharing", 
      "https://drive.google.com/file/d/1sQQ56-Cu14Jn7dKQ7Id10mcvu-ucq9z6/view?usp=sharing", 
      "https://drive.google.com/file/d/1sap2JrZJs2YT120KqGtr1W4oFH0_QVpr/view?usp=sharing", 
      "https://drive.google.com/file/d/1sthFiyMEEFkmQ_sylYIzyf8ejzsscVjv/view?usp=sharing", 
      "https://drive.google.com/file/d/1t-qe_dhd0J4afqyPeNnEY6KIzVU7W_6y/view?usp=sharing", 
      "https://drive.google.com/file/d/1t5BNlTKLXDEA62vZX0CDAVTPwt0N6CG2/view?usp=sharing", 
      "https://drive.google.com/file/d/1tTN0Cw1P6ubz_lN5Siq35ad0mYp1ZGOR/view?usp=sharing", 
      "https://drive.google.com/file/d/1tZ94cqFvEXzWV0FqRk84URBDIaWxXWHA/view?usp=sharing", 
      "https://drive.google.com/file/d/1tnlVuE8D3HTVK35L_bRy6KHTS42T5GRU/view?usp=sharing", 
      "https://drive.google.com/file/d/1uBPTB9BHlEQfD_t3ECuMq0d-rVVJaXVp/view?usp=sharing", 
      "https://drive.google.com/file/d/1uaqb11q8yTH_TgIO4y_VMqeL6p5377ih/view?usp=sharing", 
      "https://drive.google.com/file/d/1ubQAJB3lytxl7yAD4W-z0UJH9SLmhHv1/view?usp=sharing", 
      "https://drive.google.com/file/d/1us6LABObeaVDhDMr-QBt9ptnO3BD8v4j/view?usp=sharing", 
      "https://drive.google.com/file/d/1v4Dra7saX3VgjxzmH5wZuK69z9DG-FVY/view?usp=sharing", 
      "https://drive.google.com/file/d/1vFWez0-OHp6ErvDhJcut5HbchOUrNp0O/view?usp=sharing", 
      "https://drive.google.com/file/d/1vHNNkoBd8lYJYuelGmRtHvmwm64nlVWJ/view?usp=sharing", 
      "https://drive.google.com/file/d/1vQzbPQ_4gXwqVA7e6jtXW3iATqGAe1II/view?usp=sharing", 
      "https://drive.google.com/file/d/1wQmiBBXwhMhkyj5LpXnZ228ch95TuWxc/view?usp=sharing", 
      "https://drive.google.com/file/d/1waaI03XjSf5k_GvWCVIYwpEpk8YFUb3A/view?usp=sharing", 
      "https://drive.google.com/file/d/1xLP9exo4VZTfI9301KgP0PQ_W2ez4U8F/view?usp=sharing", 
      "https://drive.google.com/file/d/1xMWm7DBPCynYQyXRSSjJe0_RfmaFBFpI/view?usp=sharing", 
      "https://drive.google.com/file/d/1xkk_tQTlwUlKldVJtXBUbMwxZDwea0ga/view?usp=sharing", 
      "https://drive.google.com/file/d/1xpSWibOVk8vSZPQqn0qtuwAaZz6r1KGR/view?usp=sharing", 
      "https://drive.google.com/file/d/1xzrmthiyho3Io_UmdlCFo7j6Y7hvj-sX/view?usp=sharing", 
      "https://drive.google.com/file/d/1yQDAtLUEKOA49rfPRxa99Tj9Ar_OJoqf/view?usp=sharing", 
      "https://drive.google.com/file/d/1ySLmqSTNUyN163V27CAW-F73G5Od9lWW/view?usp=sharing", 
      "https://drive.google.com/file/d/1yyr3yuoUhFEdYgxfIaNaddeh6SvYTmtU/view?usp=sharing", 
      "https://drive.google.com/file/d/1zVlf6l0990oTo7FyE8Wua-VqCtp8bd4f/view?usp=sharing", 
      "https://drive.google.com/file/d/1zbfkWKvTY4eyhN8cTj8I_PPxMX0GPxhg/view?usp=sharing", 
      "https://drive.google.com/file/d/1zemsIFEQpYg-4o5Z-VL7fnl-do__S_oW/view?usp=sharing", 
      "https://drive.google.com/file/d/1zql_VGLsroRjUHcZXt6qtMvaVgSkLPi6/view?usp=sharing",
   ]
}

export default data
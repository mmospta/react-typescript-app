import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import errorImage from "../../Assets/images/Cardback.jpeg";

type PokeData = {
  card_thumbnail_id: number;
  card_thumbnail_profile: string;
  card_thumbnail_profile_sm: string;
  card_thumbnail_comment: string;
  card_code: string;
  card_rarity: string;
  card_rarity_display: string;
  prefix: string;
  artist: string;
  card_id: number;
  card_comment: string;
  special_text: number;
  special_text_display: string;
  hp: number;
  pokemon_type: string;
  pokemon_type_display: string;
  ability_name: string;
  ability_text: string;
  skill_1_token: string;
  skill_1_name: string;
  skill_1_detail: string;
  skill_1_damage: string;
  skill_2_token: string;
  skill_2_name: string;
  skill_2_detail: string;
  skill_2_damage: string;
  skill_3_token: string;
  skill_3_name: string;
  skill_3_detail: string;
  skill_3_damage: string;
  skill_gx_token: string;
  skill_gx_name: string;
  skill_gx_detail: string;
  skill_gx_damage: string;
  default_rarity: string;
  weakness: string;
  resistance: string;
  resistance_value: number;
  retreat: number;
  rule: string;
  asl: number;
  ael: number;
  isl: number;
  iel: number;
  tsl: number;
  tel: number;
  collection_id: number;
  collection_profile: string;
  collection_display: string;
  collection_display_en: string;
  card_series: string;
  card_series_display: string;
  collection_code: string;
  release_date: Date;
  card_name_id: number;
  card_name_display: string;
  card_name_display_en: string;
  maximum: number;
  pokemon_stage: number;
  pokemon_stage_display: string;
  trainer_stage: number;
  trainer_stage_display: string;
  pokedex_id: number;
  pokedex_no: string;
  pokedex_profile: string;
  pokedex_stage: string;
  family_id: number;
  balance: number;
};

type UserData = {
  id: String;
  name: String;
  lastName: String;
  nickName: String;
};

const Home = () => {
  const [pokeData, setPokeData] = useState<PokeData[]>([]);
  useEffect(() => {
    axios
      .get("https://www.gymmew.in.th/features/card/DetailLists")
      .then((res) => {
        console.log(res.data);

        setPokeData(res.data as PokeData[]);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className={classes.root}>
      <p>Home</p>
      <Grid container spacing={2}>
        {pokeData.length
          ? pokeData.slice(0, 39).map((data) => {
              console.log(data.card_name_display);
              return (
                <Grid item xs={3} md={2} xl={2} className={classes.Grid}>
                  <div className={classes.Card}>
                    <img
                      className={classes.CardImg}
                      src={data.card_thumbnail_profile}
                      onError={(e: any) => {
                        e.target.onError = null;
                        e.target.src = errorImage;
                      }}
                    />
                    <div className={classes.CardDetail}>
                      <div
                        className={classes.CardName}
                        title={data.card_name_display}
                      >
                        {data.card_name_display}
                      </div>
                      <div>{data.card_code}</div>
                    </div>
                  </div>
                </Grid>
              );
            })
          : null}
      </Grid>
      <Link to="/details">go to details</Link>
    </div>
  );
};

export default Home;

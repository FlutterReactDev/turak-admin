import { KEY_2GIS } from "@/constants/2gis-key";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GISBaseResponse, SuggestResult } from "./types";

export const GISApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://catalog.api.2gis.com",
  }),
  endpoints: (build) => ({
    suggests: build.query<GISBaseResponse<SuggestResult>, string>({
      query: (query) => ({
        url: "/3.0/suggests",
        method: "GET",
        params: {
          q: query,
          fields:
            "items.point,items.name_ex,items.rubrics,items.org,items.adm_div,items.routes,items.type,items.subtype,items.address,items.search_attributes.personal_priority,items.search_attributes.dgis_source_type,items.search_attributes.dgis_found_by_address,items.segment_id,items.region_id,items.locale,items.group,items.context,search_attributes,items.flags,items.has_exchange,items.ads.options",
          type: "adm_div.region,adm_div.district_area,adm_div.city,adm_div.settlement,adm_div.district,adm_div.living_area,adm_div.division,adm_div.place,street,branch,building,road,attraction,crossroad,route,route_type,station,station.metro,user_queries,attribute,rubric,meta_rubric,org,special,coordinates,kilometer_road_sign",
          key: KEY_2GIS,
          locale: "ru_KG",
          viewpoint1: "74.3389763517406,43.33888246883939",
          viewpoint2: "74.95248450144626,42.450122424789086",
        },
      }),
    }),
  }),
});

export const { useSuggestsQuery } = GISApi;


import noirNest from "./noir-nest";
import tempoHouse from "./tempo-house";
import opalVista from "./opal-vista";
import velvetEarth from "./velvet-earth";
import tranquilLux from "./tranquil-lux";
import bitterVilla from "./bitter-villa";
import boldFusion from "./bold-fusion";
import noirHorizon from "./noir-horizon";
import bloomeHose from "./bloome-hose";
import ethraRestaurant from "./ethra-restaurant";
import duskyRose from "./dusky-rose";
import aequorVilla from "./aequor-villa";
import birdsIsland from "./birds-island";
import theArtOfLiving from "./the-art-of-living";
import creenTowers from "./creen-towers";
import quietDimension from "./quiet-dimension";
import veloraResidence from "./velora-residence";
import humanFormSpace from "./human-form-space";
import aureliaTerraces from "./aurelia-terraces";
import centeredLiving from "./centered-living";
import silterraVilla from "./silterra-villa";
import innerBalance from "./inner-balance";
import emberHouse from "./ember-house";
import echoesOfEarth from "./echoes-of-earth";
import oasisLine from "./oasis-line";
import symphonyOfSpace from "./symphony-of-space";
import ariaResidence from "./aria-residence";
import stoneLight from "./stone-light";
import poolOasis from "./pool-oasis";

// Apartment projects
import aestheticAbode from "./aesthetic-abode";
import aestheticPleasure from "./aesthetic-pleasure";
import bohemianChic from "./bohemian-chic";
import levitatingBeautyFor from "./levitating-beauty-for";
import luxeLivingConcepts from "./luxe-living-concepts";
import velvetVibe from "./velvet-vibe";

export const projectDetails = [
  noirNest,
  tempoHouse,
  opalVista,
  velvetEarth,
  tranquilLux,
  bitterVilla,
  boldFusion,
  noirHorizon,
  bloomeHose,
  ethraRestaurant,
  duskyRose,
  aequorVilla,
  birdsIsland,
  theArtOfLiving,
  creenTowers,
  quietDimension,
  veloraResidence,
  humanFormSpace,
  aureliaTerraces,
  centeredLiving,
  silterraVilla,
  innerBalance,
  emberHouse,
  echoesOfEarth,
  oasisLine,
  symphonyOfSpace,
  ariaResidence,
  stoneLight,
  poolOasis,

  // Apartments
  aestheticAbode,
  aestheticPleasure,
  bohemianChic,
  levitatingBeautyFor,
  luxeLivingConcepts,
  velvetVibe,
];

export function getProjectBySlug(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}

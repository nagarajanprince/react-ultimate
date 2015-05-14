// IMPORTS =========================================================================================
import state from "frontend/state";
import setModelId from "frontend/actions/set-model-id/monster";
import loadModel from "frontend/actions/load-model/monster";

// ACTIONS =========================================================================================
export default function establishModel() {
  console.debug("establishModel");

  let cursor = state.select("url");

  setModelId(cursor.get("id"));

  loadModel();
}
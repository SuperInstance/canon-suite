// index.js — canon-suite: a meta-package that re-exports all canon
// operations (claim, drill, hash, graph) as a single import.
//
//   const { claim, drill, stateHash, renderGraph } = require('@superinstance/canon-suite');

const { claim, drill, DEFAULT_BASE: CLAIM_BASE } = require('@superinstance/canon-claim');
const { stateHash, getHex, DEFAULT_BASE: HASH_BASE } = require('@superinstance/canon-hash');
const { fetchCanon, renderGraph, DEFAULT_BASE: GRAPH_BASE } = require('@superinstance/canon-graph');

module.exports = {
  claim,
  drill,
  stateHash,
  getHex,
  fetchCanon,
  renderGraph,
  DEFAULT_BASE: CLAIM_BASE || HASH_BASE || GRAPH_BASE,
};

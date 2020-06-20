// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const express = require("express")
const router = express.Router();
const path =require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  //define the home page route
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

 

  module.exports = router
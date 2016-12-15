/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Group}", "click", function(sym, e) {
         
         // Set a toggle to play or pause the audio timeline 
         if (sym.isPlaying()) {
         	sym.stop();
         	sym.$("playb").attr("src","images/play.svg");
         } else {
         	sym.play();
         	sym.$("playb").attr("src","images/pause.svg");
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group2}", "click", function(sym, e) {
         sym.play(0);
         sym.$("playb").attr("src","images/pause.svg");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group2}", "mouseover", function(sym, e) {
         sym.$("Group2").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group2}", "mouseout", function(sym, e) {
         sym.$("Group2").css("opacity","0.8");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group}", "mouseover", function(sym, e) {
         sym.$("Group").css("opacity","1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group}", "mouseout", function(sym, e) {
         sym.$("Group").css("opacity","0.8");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11550, function(sym, e) {
         sym.$("year").html("1939-1945");
         sym.$("summary").html("<p>The British mandate facilitated Jewish immigration from Europe to Palestine in the 1920s & 1930s.</p><p>By 1947, the Jewish population had increased tenfold to 33 percent of Palestine.</p>");
         sym.$("notes").html("Jewish immigration");
         sym.$("AC").html("95%");
         sym.$("JC").html("5%");
         sym.$("gazawest1").html("");
         sym.$("gazawest2").html("");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.$("year").html("1946");
         sym.$("summary").html("<p>In 1946, Zionist Jews controlled less than six percent of Historic Palestine.</p>");
         sym.$("notes").html("Jewish immigration");
         sym.$("AC").html("94.5%");
         sym.$("JC").html("5.5%");
         sym.$("gazawest1").html("");
         sym.$("gazawest2").html("");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21657, function(sym, e) {
         sym.$("year").html("1947");
         sym.$("summary").html("<p>The UN proposed a plan that would grant 55 percent of historic Palestine to a Jewish state and 45 percent to a non-contiguous Arab one. Jerusalem would get special international status.</p><p>Palestinians rejected the proposal because it stripped away much of the land that was under their control. At the time, they owned 94 percent of historic Palestine and comprised 67 percent of the population.</p>");
         sym.$("notes").html("UN Partition Plan for Palestine");
         sym.$("AC").html("94%");
         sym.$("JC").html("6%");
         sym.$("gazawest1").html("");
         sym.$("gazawest2").html("");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24916, function(sym, e) {
         sym.$("year").html("1947-1949");
         sym.$("summary").html("<p>On May 14, 1948, the day the British mandate expired, Zionists declared the state of Israel to be born.</p> <p>Zionist military forces expelled at least 750,000 Palestinians, destroyed over 530 villages and captured 78 percent of historic Palestine. The remaining 22 percent was divided into two parts: The West Bank and Gaza Strip.</p><p>In 1949, the UN welcomed Israel as a member state. No Palestinian state ever materialised.</p>");
         sym.$("notes").html("Palestinian refugees");
         sym.$("AC").html("22%");
         sym.$("JC").html("78%");
         sym.$("gazawest1").html("Palestinians in the West Bank and Gaza");
         sym.$("gazawest2").html("Remaining Palestinians in Israel");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31924, function(sym, e) {
         sym.$("year").html("1967-1993");
         sym.$("summary").html("<p>In June 1967, Israel expanded into the West Bank, including East Jerusalem, and the Gaza Strip, occupying all of historic Palestine.</p><p>This has made the Israeli occupation the longest in modern history.</p>");
         sym.$("notes").html("Territories occupied by Israel");
         sym.$("AC").html("0%");
         sym.$("JC").html("100%");
         sym.$("gazawest1").html("Palestinians in the West Bank and Gaza");
         sym.$("gazawest2").html("Remaining Palestinians in Israel");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46875, function(sym, e) {
         sym.$("year").html("1993");
         sym.$("summary").html("<p>PLO Leader Yasser Arafat signed the Oslo Declaration of Principles with Israeli PM Yitzhak Rabin.</p><p>The future negotiations were supposed to determine which areas Palestinians would control within the 22 percent of historic Palestine that Israel occupied in 1967.</p>");
         sym.$("notes").html("");
         sym.$("AC").html("0%");
         sym.$("JC").html("100%");
         sym.$("gazawest1").html("Palestinians in the West Bank and Gaza");
         sym.$("gazawest2").html("Remaining Palestinians in Israel");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50400, function(sym, e) {
         sym.$("year").html("1994-2014");
         sym.$("summary").html("<p>Palestinians were given certain powers of self-rule in urban parts of the West Bank and Gaza Strip. However, Israel maintains security control and the ability to raid at any time.</p>");
         sym.$("notes").html("");
         sym.$("AC").html("0%");
         sym.$("JC").html("100%");
         sym.$("gazawest1").html("Palestinians in the West Bank and Gaza");
         sym.$("gazawest2").html("Remaining Palestinians in Israel");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         sym.$("year").html("2014");
         sym.$("summary").html("<p>Even today, Palestinian national aspirations remain elusive.</p> <p>Throughout historic Palestine, Palestinians face occupation and colonisation, siege and war, and discrimination and second-class treatment from Israeli rule.</p><p>Additionally, millions of Palestinian refugees languish in camps awaiting their right to return to their homes.</p>");
         sym.$("notes").html("");
         sym.$("AC").html("0%");
         sym.$("JC").html("100%");
         sym.$("gazawest1").html("Palestinians in the West Bank and Gaza");
         sym.$("gazawest2").html("Remaining Palestinians in Israel");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("year").html("1917-1939");
         sym.$("summary").html("<p>The British mandate's main objective was to place historic Palestine under political, administrative and economic conditions that would secure the establishment of a Jewish national home in Palestine.</p><p>Before the British mandate in Palestine, Jews made up three percent of the total population.</p>");
         sym.$("notes").html("");
         sym.$("AC").html("97%");
         sym.$("JC").html("3%");
         sym.$("gazawest1").html("");
         sym.$("gazawest2").html("");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${y1917}", "click", function(sym, e) {
         sym.play("1917");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${y1917Copy6}", "click", function(sym, e) {
         sym.play("1939");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${y1917Copy5}", "click", function(sym, e) {
         sym.play("1946");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${y1917Copy7}", "click", function(sym, e) {
         sym.play("1947");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${y1917Copy8}", "click", function(sym, e) {
         sym.play("1948");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${y1917Copy2}", "click", function(sym, e) {
         sym.play("1967");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${y1917Copy3}", "click", function(sym, e) {
         sym.play("1993");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${y1917Copy4}", "click", function(sym, e) {
         sym.play("1995");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${y1917Copy}", "click", function(sym, e) {
         sym.play("2014");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${playb}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to play or pause the audio timeline 
         if (sym.isPlaying()) {
         	sym.stop();
         	sym.$("playb").attr("src","images/play.svg");
         } else {
         	sym.play();
         	sym.$("playb").attr("src","images/pause.svg");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${replay}", "click", function(sym, e) {
         sym.play(0);
         	sym.$("playb").attr("src","images/pause.svg");
         
         

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-40799987");
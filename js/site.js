$(document).ready(function() {

    function generateIpsum(paragraphCount, sentenceCount) {

        $.getJSON("sentences.json",

            function(data) {
                var arr = _.shuffle(data);
                var output = '';
                for (var p = 0; p < paragraphCount; p++) {
                    var firstSentences = _.first(arr, sentenceCount);
                    arr = _.rest(arr, sentenceCount);
                    output = output + "<p>" + firstSentences.join(" ") + "</p>";
                }
                $('.text').html(output);
            });

    }

    function toggleIpsum(selector, paragraphCount, sentenceCount) {
        $(selector).on('click', function() {
            generateIpsum(paragraphCount, sentenceCount);
        })
    }

    toggleIpsum('.reload', 5, 5);
    generateIpsum(5, 5);

});
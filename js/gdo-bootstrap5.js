window.gdo = window.gdo || {}
window.gdo.toggleSidebar = function(side) {
    document.getElementById(side).classList.toggle("collapsed");
};

$(function() {
    console.log('Initiating autocompletes.');
    $('input[gdo-completion]').each(function() {
        const self = $(this);
        let url = self.attr('gdo-completion');
        let data1 = JSON.parse(self.attr('gdo-completion-data'));
        let data2 = JSON.parse(self.attr('gdo-completion-data2'));
        const initial = self.val();
        self.on('select2:open', function (e) {
            setTimeout(function () {
                $('.select2-search__field').val(self.val());
            }, 1);
        });
        self.on('select2:select', function (e) {
            const data = e.params.data;
            setTimeout(function() {
                t = $(e.target);
                if(!self.attr('multiple')) {
                    $(t).empty().val(null); //.trigger('change');
                }
                $(t).append(new Option(data.text, data.id, true, true));
                self.val(data.text);
              }, 0);
         });
         self.select2({
            placeholder: self.attr('placeholder'),
            tags: data1.allow_new,
            multiple: !!self.attr('multiple'),
            minimumInputLength: 2,
            ajax: {
                url: url,
                dataType: 'json',
                delay: 350,
                data: params => (
                    $.extend({'q': params.term}, data1, data2)
                ),
                processResults: data => ({
                  results: data.data.map(item => ({
                    id: item.id,
                    text: item.val,
                  }))
                })
            },
            createTag: function (params) {
                const term = $.trim(params.term);
                if (term === '') {
                    return null;
                }
                return {
                    id: term,
                    text: term,
                    newTag: true
                };
            }
        });
        setTimeout(function() {
           self.val(initial).trigger('change');
        }, 1);
    });
});

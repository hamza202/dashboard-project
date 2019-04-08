var DatatablesDataSourceAjaxServer = {
    init: function () {
        $("#m_table_1").DataTable({
            responsive: !0,
            searchDelay: 500,
            processing: !0,
            dom: '"<\'row\'<\'col-sm-12 col-md-3\'l><\'col-sm-12 col-md-5\'B><\'col-sm-12 col-md-4\'f>>" +\n' +
            '"<\'row\'<\'col-sm-12\'tr>>" +\n' +
            '"<\'row\'<\'col-sm-12 col-md-5\'i><\'col-sm-12 col-md-7\'p>>",',
            buttons: [
                'print', 'excel', 'pdf'
            ],
            "ordering": false,
            oLanguage: {
                oPaginate: {
                    sNext: '<span class="pagination-default"></span><span class="pagination-fa"><i class="fa fa-chevron-right" ></i></span>',
                    sPrevious: '<span class="pagination-default"></span><span class="pagination-fa"><i class="fa fa-chevron-left" ></i></span>'
                },
                "sSearch": "<span>Search all fields:</span> _INPUT_"
            },
            serverSide: !0,
            ajax: "https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/datatables/demos/server.php",
            columns: [{data: "OrderID"}, {data: "Country"}, {data: "ShipCity"}, {data: "Status"}, {data: "Type"}, {data: "Actions"}],
            columnDefs: [{
                targets: -1, orderable: !1, render: function (a, e, t, n) {
                    return '<div class="custom-control  custom-checkbox mr-sm-2 d-inline-block check-inc">\n' +
                        '                        <input type="checkbox" class="custom-control-input cheksub" >\n' +
                        '                        <label class="custom-control-label" ></label>\n' +
                        '                    </div>'+
                        '<a href="#" class="d-inline-block view-link">View</a>'
                }
            }]
        })
    }

};
jQuery(document).ready(function () {
    DatatablesDataSourceAjaxServer.init()
});


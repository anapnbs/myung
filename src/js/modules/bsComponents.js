import $ from 'jquery';

const tooltip = $(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

const popover = $(function () {
    $('[data-toggle="popover"]').popover()
});

export { tooltip, popover };
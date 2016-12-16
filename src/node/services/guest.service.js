module.exports = function guestService(models) {

    var Guest = models.Guest;

    this.create = create;

    function create(guest) {
        return Guest.create(guest);
    }

    return this;
}
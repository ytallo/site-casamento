module.exports = function giftService(models, giftModel) {

    var Gift = models.Gift;

    this.create = create;
    this.update = update;
    this.list = list;

    function create(gift) {
        return Gift.create(gift);
    }

    function update(gift) {
        return Gift.update(gift);
    }

    function list() {
        return giftModel.list();
    }

    return this;
}
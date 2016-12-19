module.exports = function giftService(models, giftModel) {

    var Gift = models.Gift;

    this.create = create;
    this.update = update;
    this.list = list;
    this.reserve = reserve;

    function create(gift) {
        return Gift.create(gift);
    }

    function update(gift) {
        return Gift.update(gift);
    }

    function list() {
        return giftModel.list();
    }

    function reserve(gift) {
        gift.reserved = Gift.HaveType.YES;
        return Gift.update(gift, { where: { gift_id: gift.id } });
    }

    return this;
}
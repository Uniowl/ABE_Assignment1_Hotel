

module.exports = hotels = [{
    id: 'test1Hotel',
    name: 'HotelTest1',
    managerId: 'test1',
    rooms: [{
        id: 'test1Room',
        roomNo: 1,
        reservations: [
            {
                id: 'test1Res',
                dateStart: new Date(),
                dataEnd: new Date(),
            }
        ],
    }]
}]



/* GET list if rooms from hotel id */
router.route('/:userid/:hotelid')
.get(hotelController.getRoomsFromHotelID)

router.route('/available/:userid/:hotelid')
.get(hotelController.getAvailableRoomsFromHotelid)

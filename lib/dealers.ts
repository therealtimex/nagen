export interface Dealer {
  id: string
  name: string
  address: string
  phone: string
  lat: number
  lng: number
  distance?: string
}

export const dealerData: Dealer[] = [
  {
    id: "dealer-1",
    name: "Trụ sở NAGEN",
    address: "Tầng 7, toà VP1, Sunsquare, 21 Lê Đức Thọ, Từ Liêm, Hà Nội",
    phone: "0966578008",
    distance: "",
    lat: 21.0285,
    lng: 105.8542,
  },
  {
    id: "dealer-2",
    name: "NAGEN Hà Nội - Đại lý Nguyễn Quốc Hùng",
    address: "288 Mỹ Đình, Từ Liêm, Hà Nội",
    phone: "0966578008",
    distance: "",
    lat: 21.0245,
    lng: 105.8412,
  },
  {
    id: "dealer-3",
    name: "NAGEN Hải Phòng - Đại lý Bùi Thị Phương",
    address: "Số 67/30 Trần Nguyên Hãn, Cát Dài, Lê Chân, TP Hải Phòng",
    phone: "0966578008",
    distance: "",
    lat: 20.8449,
    lng: 106.6881,
  },
  {
    id: "dealer-4",
    name: "NAGEN Nghệ An - Đại lý Ngô Thị Thuỳ Hương",
    address: "61 Ngô Gia Tự, khối 2, phường Vinh Hưng, Tỉnh Nghệ An",
    phone: "0966578008",
    distance: "",
    lat: 18.6793,
    lng: 105.6811,
  },
  {
    id: "dealer-5",
    name: "NAGEN Nghệ An - Đại lý Trần Thị Hải",
    address: "Thôn Sông Mơ, Xã Quỳnh Anh, Tỉnh Nghệ An",
    phone: "0966578008",
    distance: "",
    lat: 18.6167,
    lng: 105.6449,
  },
  {
    id: "dealer-6",
    name: "NAGEN Đồng Nai - Đại lý Phạm Thị Hương",
    address: "Số 25, Khu dân cư Phú Thịnh, xã Bình Tân, Tỉnh Đồng Nai",
    phone: "0966578008",
    distance: "",
    lat: 10.9955,
    lng: 107.0066,
  },
  {
    id: "dealer-7",
    name: "NAGEN Hà Nội - Đại lý Lương Văn Nam",
    address: "Ngõ 106 Cù Chính Lan, Phường Khương Đình, Hà Nội",
    phone: "0966578008",
    distance: "",
    lat: 20.9721,
    lng: 105.8148,
  },
  {
    id: "dealer-8",
    name: "NAGEN Hà Nội - Đại lý La Ngọc Tuyền",
    address: "1352/12 Đường 3/2, Quận11, TP Hồ Chí Minh",
    phone: "0966578008",
    distance: "",
    lat: 10.7769,
    lng: 106.6509,
  },
  {
    id: "dealer-9",
    name: "NAGEN Hồ Chí Minh - Đại lý Đặng Thị Thanh Vân",
    address: "233/71A Trương Thị Hoa, Phường Tân Thới Hiệp, Quận 12, TP Hồ Chí Minh",
    phone: "0966578008",
    distance: "",
    lat: 10.8231,
    lng: 106.6297,
  },
  {
    id: "dealer-10",
    name: "NAGEN Hồ Chí Minh - Đại lý Trịnh Thị Tố Trinh",
    address: "350/62A, Bùi Hữu Nghĩa, Phường Gia Định, TP Hồ Chí Minh",
    phone: "0966578008",
    distance: "",
    lat: 10.8031,
    lng: 106.6797,
  },
  {
    id: "dealer-11",
    name: "NAGEN Hà Nội - Đại lý Nghiêm Xuân Mạnh",
    address: "Chung cư Vinaconex 3 Ngõ 45 Trần Thái Tông, Cầu Giấy, Hà Nội",
    phone: "0966578008",
    distance: "",
    lat: 21.0378,
    lng: 105.7804,
  },
]

// Function to calculate distance between two coordinates
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km
  return d
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180)
}

// Function to get dealers sorted by distance from a location
export function getDealersByDistance(userLat: number, userLng: number) {
  return dealerData
    .map((dealer) => {
      const distance = calculateDistance(userLat, userLng, dealer.lat, dealer.lng)
      return {
        ...dealer,
        distance: `${distance.toFixed(1)} km`,
        distanceValue: distance,
      }
    })
    .sort((a, b) => (a.distanceValue || 0) - (b.distanceValue || 0))
}

// Function to filter dealers by province and district
export function filterDealers(province?: string, district?: string) {
  let filtered = [...dealerData]

  if (province) {
    // In a real app, you would filter by actual province data
    filtered = filtered.filter((dealer) => dealer.address.includes(province))
  }

  if (district) {
    // In a real app, you would filter by actual district data
    filtered = filtered.filter((dealer) => dealer.address.includes(district))
  }

  return filtered
}

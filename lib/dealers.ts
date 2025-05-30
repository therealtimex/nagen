export type DealerStatus = "Đang mở cửa" | "Đóng cửa"

export interface Dealer {
  id: string
  name: string
  address: string
  phone: string
  status: DealerStatus
  lat: number
  lng: number
  distance?: string
}

export const dealerData: Dealer[] = [
  {
    id: "dealer-1",
    name: "NAGEN Cầu Giấy",
    address: "123 Đường Cầu Giấy, Quận Cầu Giấy, Hà Nội",
    phone: "024 3563 2008",
    status: "Đang mở cửa",
    distance: "",
    lat: 21.0285,
    lng: 105.8542,
  },
  {
    id: "dealer-2",
    name: "NAGEN Đống Đa",
    address: "456 Đường Láng, Quận Đống Đa, Hà Nội",
    phone: "024 3563 2009",
    status: "Đang mở cửa",
    distance: "",
    lat: 21.0245,
    lng: 105.8412,
  },
  {
    id: "dealer-3",
    name: "NAGEN Nam Từ Liêm",
    address: "789 Lê Đức Thọ, Quận Nam Từ Liêm, Hà Nội",
    phone: "024 3563 2010",
    status: "Đóng cửa",
    distance: "4.1 km",
    lat: 21.0378,
    lng: 105.7804,
  },
  {
    id: "dealer-4",
    name: "NAGEN Hoàn Kiếm",
    address: "321 Phố Huế, Quận Hoàn Kiếm, Hà Nội",
    phone: "024 3563 2011",
    status: "Đang mở cửa",
    distance: "5.2 km",
    lat: 21.0278,
    lng: 105.8525,
  },
  {
    id: "dealer-5",
    name: "NAGEN Hai Bà Trưng",
    address: "654 Bà Triệu, Quận Hai Bà Trưng, Hà Nội",
    phone: "024 3563 2012",
    status: "Đang mở cửa",
    distance: "6.1 km",
    lat: 21.0167,
    lng: 105.8449,
  },
  {
    id: "dealer-6",
    name: "NAGEN Thanh Xuân",
    address: "987 Nguyễn Trãi, Quận Thanh Xuân, Hà Nội",
    phone: "024 3563 2013",
    status: "Đang mở cửa",
    distance: "7.3 km",
    lat: 20.9955,
    lng: 105.8066,
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

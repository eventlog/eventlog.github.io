regions = ["region_gallia", "region_italia"]

provinces = {
    province_roma: {
        name: "Roma",
        region: "region_rome",
        connections: [ "province_tver" ],
        resource: [],
        z: 9000
    },
    province_tver: {
        name: "Tver",
        region: "region_moscow",
        connections: [ "province_moskva" ]
    }    
}

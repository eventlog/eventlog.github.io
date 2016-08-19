regions = ["region_moscow"]

provinces = {
    province_moskva: {
        name: "Moskva",
        region: "region_moscow",
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

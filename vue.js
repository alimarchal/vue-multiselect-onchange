var app = new Vue({
    el: "#app",
    data: {
        regions: ['North', 'South'],
        zoneFlag: false,
        northZones: ['Rawalakot', 'Muzaffarabad'],
        southZones: ['Mirpur', 'Kotli'],
        // below are district of AJK showing as zone wise
        muzaffarabadZones: ['Muzaffarabad', 'Neelum', 'Hattian'],
        rawalakotZones: ['Poonch', 'Sudhnoti', 'Bagh', 'Havelli'],
        mirpurZones: ['Mirpur', 'Bhimber'],
        kotliZones: ['Kotli'],
        regionValue: '',
        zoneValue: '',
        districtValue: '',
        branchValue: '',
        districtFlag: '',
        branchFlag: '',
        districtMZDS: ['MAIN BR MZD', 'GARHI DOPATA', 'LOWER PLATE', 'CHATTER KALAS', 'PATTIKA', 'MADINA MARKET', 'DISTRICT COMPLEX', 'LADIES BRANCH', 'UPPER ADHA', 'GOJRA BYPASS', 'BARARKOT BRANCH'],
        districtNEELUMS: ['AUTHMAQAM', 'SHARDA', 'JOORA', 'KUTTON', 'KUNDAL SHAHI'],
        districtHATTIANS: ['CHIKAR', 'HATTIAN', 'CHAKOTHI', 'CHATTIAN', 'KAHUTA'],
        districtPOONCHS: ['MAIN BR RKT', 'HAJIRA', 'ABBASPUR', 'KHAIGALA', 'PANIOLA', 'THORAR', 'CMH ROAD RKT', 'BUNBHAK'],
        districtSUDHNOTIS: ['PALLANDRI', 'TRARKHEL', 'BALOCH', 'TALIAN', 'MANG'],
        districtBAGHS: ['BAGH', 'ARJA', 'DHIRKOT'],
        districtHAVELLIS: ['KAHUTA'],
        districtMIRPURS: ['MAIN BRANCH MIRPUR', 'DADYAL', 'CHAKSAWARI BRANCH', 'MAIN BAZAR CHAKSAWARI', 'ISLAMGARH BRANCH', 'F/3 MIRPUR AK', 'PULMANDA', 'JATLAN BRANCH', 'M.M.TOWN', 'JHATTI DHERI BRANCH', 'LADIES BRANCH MIRPUR', 'RATTA'],
        districtBHIMBERS: ['BHIMBER BRANCH', 'BARNALA', 'CHOWKI', 'POONA BRANCH', 'MOIL'],
        districtKOTLIS: ['MAIN BRANCH KOTLI', 'SEHNSA', 'NAR', 'BRATLAH', 'KHUIRATTA', 'SARSAWA', 'KHAD GUJRAN', 'CHARHOI', 'TATTA PANI', 'MAI TOTI', 'DHANNA', 'JUNA', 'SEHRMANDI', 'JARAHI', 'GOI BRANCH', 'LORY ADDA BRANCH'],
    },
    methods: {
        selectRegion: function (event) {
            this.regionValue = event.target.value;
            this.zoneFlag = true;
            if (event.target.value === "") {
                this.zoneFlag = false;
                this.districtFlag = false;
                this.branchFlag = false;
            }
        },
        selectZone: function (event) {
            this.zoneValue = event.target.value;
            this.districtFlag = true;
            // alert(event.target.value);
        },
        selectDistrict: function (event) {
            this.districtValue = event.target.value;
            this.branchFlag = true;
            // alert(event.target.value);
        }
    }
})


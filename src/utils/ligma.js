// ･ﾟ｡  🎀  𝓁𝒾𝑔𝓂𝒶  🎀  ｡ﾟ･ LIGMA IS A DATA PROCESSING MODULE THAT RETURNS CAREFULLY RPOCESSED DATA FOR NEW NORMAL SITE

import React from 'react'

//icons
import HomeIcon from '@material-ui/icons/Home';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import WorkIcon from '@material-ui/icons/Work';
import CommuteIcon from '@material-ui/icons/Commute';
import SchoolIcon from '@material-ui/icons/School';
import WorkOffIcon from '@material-ui/icons/WorkOff';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import WcIcon from '@material-ui/icons/Wc';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import InfoIcon from '@material-ui/icons/Info';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

const content = {
    policyContent: {
        c1: {
            title: "school closures",
            icon: SchoolIcon,
            0: {
                label: "no measures",
                color: "green"
            },
            1: {
                label: "recommend closing",
                color: "blue"
            },
            2: {
                label: "require closing some levels",
                color: "yellow"
            },
            3: {
                label: "require closing all levels",
                color: "red"
            },
        },
        c2: {
            title: "work closures",
            icon: WorkOffIcon,
            0: {
                label: "no measures",
                color: "green"
            },
            1: {
                label: "recommend closing/work from home",
                color: "blue"
            },
            2: {
                label: "require closing/work from home for some",
                color: "yellow"
            },
            3: {
                label: "require closing/work from home for most workplaces",
                color: "red"
            },
        },
        c3: {
            title: "public events cancelation",
            icon: EventBusyIcon,
            0: {
                label: "no measures",
                color: "green"
            },
            1: {
                label: "recommend cancelling",
                color: "yellow"
            },
            2: {
                label: "require cancelling",
                color: "red"
            },
        },
        c4: {
            title: "gathering restrictions",
            icon: WcIcon,
            0: {
                label: "no restrictions",
                color: "green"
            },
            1: {
                label: "restrictions on large gatherings above 1000 people",
                color: "blue"
            },
            2: {
                label: "restrictions on gatherings between 101-1000 people",
                color: "purple"
            },
            3: {
                label: "restrictions on gatherings between 11-100 people",
                color: "yellow"
            },
            4: {
                label: "restrictions on gatherings of 10 people or less",
                color: "red"
            },
        },
        c5: {
            title: "public transport",
            icon: AirportShuttleIcon,
            0: {
                label: "no measures",
                color: "green"
            },
            1: {
                label: "recommend closing or reduce available transport",
                color: "yellow"
            },
            2: {
                label: "require closing or prohibit most citizens from using it",
                color: "red"
            },
        },
        c6: {
            title: "stay-at-home orders",
            icon: HomeIcon,
            0: {
                label: "no measures",
                color: "green"
            },
            1: {
                label: "recommend not leaving house",
                color: "blue"
            },
            2: {
                label: "require not leaving house with exceptions for general needs",
                color: "yellow"
            },
            3: {
                label: "require not leaving house with minimal exceptions",
                color: "red"
            },
        },
        c7: {
            title: "internal movement",
            icon: EmojiTransportationIcon,
            0: {
                label: "no measures",
                color: "green"
            },
            1: {
                label: "recommend not to travel between regions/cities",
                color: "yellow"
            },
            2: {
                label: "internal movement restrictions in place",
                color: "red"
            },
        },
        c8: {
            title: "international travel",
            icon: AirplanemodeActiveIcon,
            0: {
                label: "no restrictions",
                color: "green"
            },
            1: {
                label: "screening arrivals",
                color: "blue"
            },
            2: {
                label: "quarantine arrivals from some or all regions",
                color: "purple"
            },
            3: {
                label: "ban arrivals from some regions",
                color: "yellow"
            },
            4: {
                label: "ban on all regions or total border closure",
                color: "red"
            },
        },
        h1: {
            title: "public information",
            icon: InfoIcon,
            0: {
                label: "no Covid-19 public information campaign",
                color: "yellow"
            },
            1: {
                label: "public officials urging caution about Covid-19",
                color: "blue"
            },
            2: {
                label: "coordinated public information campaign",
                color: "green"
            },
        },
        h2: {
            title: "testing policy",
            icon: AssignmentTurnedInIcon,
            0: {
                label: "no testing policy",
                color: "yellow"
            },
            1: {
                label: "only those who have symptoms and meet specific criteria",
                color: "purple"
            },
            2: {
                label: "testing of anyone showing Covid-19 symptoms",
                color: "blue"
            },
            3: {
                label: "open public testing",
                color: "green"
            },
        },
        h3: {
            title: "Contact tracing",
            icon: PersonPinCircleIcon,
            0: {
                label: "no contact tracing",
                color: "yellow"
            },
            1: {
                label: "limited contact tracing/not done for all cases",
                color: "blue"
            },
            2: {
                label: "comprehensive contact tracing; done for all identified cases",
                color: "green"
            }
        },
    },
    travelAdvisoryContent: {
        1: { color: "green", title: "Level 1 - low risk" },
        3: { color: "blue", title: "Level 2 - exercise caution" },
        4: { color: "yellow", title: "Level 3 - reconsider travel" },
        5: { color: "red", title: "Level 4 - do not travel" },
    },
    mobilityContent: {
        retail: { key: "retail", text: "retail & recreation", icon: LocalMallIcon },
        grocery: { key: "grocery", text: "grocery & pharmacy", icon: LocalGroceryStoreIcon },
        parks: { key: "parks", text: "parks", icon: EmojiNatureIcon },
        transit: { key: "transit", text: "transit stations", icon: CommuteIcon },
        workplaces: { key: "workplace", text: "workplaces", icon: WorkIcon },
        residential: { key: "residential", text: "residential", icon: HomeIcon },
    }
}

const getGeneralInfo = (data) => {

    let result = {};
    const countryName = data.Country;
    const cases = { new: data.NewConfirmed, total: data.TotalConfirmed };
    const recovered = { new: data.NewRecovered, total: data.TotalRecovered };
    const date = data.Date;
    result = { countryName, cases, recovered, date }

    return result;
};

const getTravelData = (restrictions, advisory) => {

    let result = {};
    //us advisory
    //console.log("advisory", advisory)
    if (advisory && advisory.sources_active !== 0) {
        let adviseValue = Math.round(advisory.score);
        adviseValue = (adviseValue === 2) ? 1 : adviseValue; //if equals 2 then make it 1
        //4.5 - 5: extreme, 3.5 - 4.5 high risk, 2.5-3.5 medium, <2.5 low
        //console.log(adviseValue)
        const titleAndColor = content.travelAdvisoryContent[adviseValue];
        result.advisory = {
            title: titleAndColor.title,
            color: titleAndColor.color,
            date: advisory.updated,
        }
    } else {
        result.advisory = {
            title: "Data not available",
            color: "blue",
            date: undefined
        }
    }
    //travel Text
    if (restrictions) {
        result.mainText = (restrictions.quick_report) ? restrictions.quick_report : undefined;
        result.detailedText = (restrictions.more_detailed_report) ? restrictions.more_detailed_report : undefined;
    } else {
        result.mainText = undefined;
        result.detailedText = undefined;
    }
    return result;
};


const getMobilityData = (data) => {

    //console.log("mobility data processing", data)
    const getColor = (value) => (value < -25) ? "red" : (value < 0) ? "yellow" : (value === 0) ? "blue" : (value > 0) ? "green" : "neutral";
    const getValue = (value) => ((typeof value) === "number") ? value + "%" : <span>&ndash;</span>


    const date = data.date;
    data = {
        retail: data.retail_and_recreation_percent_change_from_baseline,
        grocery: data.grocery_and_pharmacy_percent_change_from_baseline,
        parks: data.parks_percent_change_from_baseline,
        transit: data.transit_stations_percent_change_from_baseline,
        workplaces: data.workplaces_percent_change_from_baseline,
        residential: data.residential_percent_change_from_baseline
    }
    //========processing========
    let result = { ...content.mobilityContent };

    let array = []
    for (let i in data) {
        //console.log("mobility", i, data[i])
        let obj = {
            ...result[i],
            value: getValue(data[i]),
            color: getColor(data[i])
        };
        array.push(obj)
    }
    // console.log("mobility array", array)
    result = { date, array }
    return result;

};

const getPolicyData = (data) => {

    let result = {
        stringency: data.stringency,
        date: data.policies.date_last_updated,
        healthArray: [],
        containmentArray: [],
    };

    delete data.policies.date_last_updated //delete date

    const policies = data.policies;

    for (let i in policies) {
        let code = i.substring(0, 2); //ex c1, h1

        if (code[0] !== "h" && code[0] !== "c") continue; //ignore other values like e1

        let value = data.policies[i];
        if (!value) continue; //remove undefined values
        let originalContent = content.policyContent[code];
        let dynamicContent = originalContent[value]; //get label and color
        let card = {
            title: originalContent.title,
            icon: originalContent.icon,
            label: dynamicContent.label,
            color: dynamicContent.color
        };

        if (code[0] === "h") result.healthArray.push(card);
        if (code[0] === "c") result.containmentArray.push(card);

        if (code === "h3") break;
    };

    return result;
};

const processCountryData = (data, language) => {

    const generalInfo = (data.general_info) ? getGeneralInfo(data.general_info) : { cases: undefined, recovered: undefined };

    const travelInfo = getTravelData(data.travel_restrictions_info, data.travel_advisory);


    let mobilityInfo = undefined;
    if (data.mobility_report_data) {
        mobilityInfo = (data.mobility_report_data) ? getMobilityData(data.mobility_report_data) : undefined;
    } else {
        mobilityInfo = (data.mobility_report) ? getMobilityData(data.mobility_report) : undefined;
    }


    let policyInfo = { containmentArray: undefined, healthArray: undefined, date: '' };
    if (data.government_response_data) {
        policyInfo = (data.government_response_data) ? getPolicyData(data.government_response_data) : policyInfo;
    } else {
        policyInfo = (data.government_response) ? getPolicyData(data.government_response) : policyInfo;
    }


    return { generalInfo, travelInfo, mobilityInfo, policyInfo }
};

export default processCountryData;


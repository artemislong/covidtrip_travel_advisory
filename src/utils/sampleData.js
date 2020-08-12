//  const sampleCovidData = {
//      cases: {
//          new: 117,
//          total: 3700
//      },
//      recoveries: {
//          new: 4345345,
//          total: 3345343700
//      }
//  };
//  const sampleAdvisory = {
//      value: 4,
//      date: "1995, 11, 17",
//  };
//  const sampleMobilityData = {
//      retail: null,
//      grocery: -10,
//      parks: 50,
//      transit: -90,
//      workplace: -10,
//      residential: null
//  };
//  const samplePoliciesData = [{
//          policy_type_code: "C1",
//          policy_type_display: "School closing",
//          policyvalue: "3",
//          policyvalue_actual: 3,
//          flagged: true,
//          is_general: true,
//          notes: null,
//          flag_value_display_field: "General",
//          policy_value_display_field: "Require closing (all levels)"
//      },
//      {
//          policy_type_code: "C2",
//          policy_type_display: "Workplace closing",
//          policyvalue: "2",
//          policyvalue_actual: 2,
//          flagged: true,
//          is_general: true,
//          notes: null,
//          flag_value_display_field: "General",
//          policy_value_display_field: "Require closing some sectors"
//      },
//      {
//          policy_type_code: "C3",
//          policy_type_display: "Cancel public events",
//          policyvalue: "2",
//          policyvalue_actual: 2,
//          flagged: true,
//          is_general: true,
//          notes: null,
//          flag_value_display_field: "General",
//          policy_value_display_field: "Required"
//      },
//      {
//          policy_type_code: "C4",
//          policy_type_display: "Restrictions on gatherings",
//          policyvalue: "4",
//          policyvalue_actual: 4,
//          flagged: true,
//          is_general: true,
//          notes: null,
//          flag_value_display_field: "General",
//          policy_value_display_field: "Restrictions on gatherings of fewer than 10 people"
//      },
//      {
//          policy_type_code: "C5",
//          policy_type_display: "Close public transport",
//          policyvalue: "0",
//          policyvalue_actual: 0,
//          flagged: null,
//          is_general: null,
//          notes: null,
//          flag_value_display_field: "General",
//          policy_value_display_field: "No Measures"
//      },
//      {
//          policy_type_code: "C6",
//          policy_type_display: "Stay at home requirements",
//          policyvalue: "2",
//          policyvalue_actual: 2,
//          flagged: false,
//          is_general: false,
//          notes: null,
//          flag_value_display_field: "General",
//          policy_value_display_field: "Required with exceptions"
//      },
//      {
//          policy_type_code: "C7",
//          policy_type_display: "Restrictions on internal movement",
//          policyvalue: "2",
//          policyvalue_actual: 2,
//          flagged: true,
//          is_general: true,
//          notes: null,
//          flag_value_display_field: "General",
//          policy_value_display_field: "Required"
//      },
//      {
//          policy_type_code: "C8",
//          policy_type_display: "International travel controls",
//          policyvalue: "4",
//          policyvalue_actual: 4,
//          flagged: null,
//          is_general: null,
//          notes: null,
//          policy_value_display_field: "Border closure"
//      },
//      {
//          policy_type_code: "E1",
//          policy_type_display: "Income support",
//          policyvalue: "0",
//          policyvalue_actual: 0,
//          flagged: null,
//          is_general: null,
//          notes: null,
//          flag_value_display_field: "All workers",
//          policy_value_display_field: "No income support"
//      },
//      {
//          policy_type_code: "E2",
//          policy_type_display: "Debt/contract relief",
//          policyvalue: "2",
//          policyvalue_actual: 2,
//          flagged: null,
//          is_general: null,
//          notes: null,
//          policy_value_display_field: "Broad"
//      },
//      {
//          policy_type_code: "E3",
//          policy_type_display: "Fiscal measures",
//          policyvalue: "0",
//          policyvalue_actual: 0,
//          flagged: null,
//          is_general: null,
//          notes: null,
//          policy_value_display_field: "USD Value"
//      },
//      {
//          policy_type_code: "E4",
//          policy_type_display: "International support",
//          policyvalue: "0",
//          policyvalue_actual: 0,
//          flagged: null,
//          is_general: null,
//          notes: null,
//          policy_value_display_field: "USD Value"
//      },
//      {
//          policy_type_code: "H1",
//          policy_type_display: "Public information campaigns",
//          policyvalue: "2",
//          policyvalue_actual: 2,
//          flagged: true,
//          is_general: true,
//          notes: null,
//          flag_value_display_field: "General",
//          "policy_value_display_field": "Coordinated public campaign"
//      },
//      {
//          policy_type_code: "H2",
//          policy_type_display: "Testing policy",
//          policyvalue: "1",
//          policyvalue_actual: 1,
//          flagged: null,
//          is_general: null,
//          notes: null,
//          policy_value_display_field: "Symptomatic & eligible"
//      },
//      {
//          policy_type_code: "H3",
//          policy_type_display: "Contact tracing",
//          policyvalue: "2",
//          policyvalue_actual: 2,
//          flagged: null,
//          is_general: null,
//          notes: null,
//          policy_value_display_field: "Comprehensive"
//      },
//      {
//          policy_type_code: "H4",
//          policy_type_display: "Emergency investment in healthcare",
//          policyvalue: "0",
//          policyvalue_actual: 0,
//          flagged: null,
//          is_general: null,
//          notes: null,
//          policy_value_display_field: "USD Value"
//      },
//      {
//          policy_type_code: "H5",
//          policy_type_display: "Investment in vaccines",
//          policyvalue: "0",
//          policyvalue_actual: 0,
//          flagged: null,
//          is_general: null,
//          notes: null,
//          policy_value_display_field: "USD Value"
//      }
//  ]


//  //  export default {
//  //      sampleCovidData,
//  //      samplePoliciesData,
//  //      sampleAdvisory,
//  //      sampleMobilityData
//  //  }

const sampleData = {
    vi: {
        travel_restrictions_info: {
            quick_report: 'Afghanistan is now accepting international travelers. ',
            more_detailed_report: 'Afghanistan has restarted international flights.\n\nPoint-of-entry screening has been introduced. Not everyone is being screened, but those who are and who show a temperature of more than 38ºC may be sent for isolation direct to one of 2 national hospitals (Kabul Infectious Disease and Afghan-Japan Communicable Disease Hospital in Kabul) or 5 provincial hospitals. These hospitals are outside of the Enhanced Security Zone.',
            us_advisory: { value: 4, date: "1995, 11, 17" }
        },
        general_info: {
            Country: 'Afghanistan',
            CountryCode: 'AF',
            Slug: 'afghanistan',
            NewConfirmed: 0,
            TotalConfirmed: 37054,
            NewDeaths: 0,
            TotalDeaths: 1312,
            NewRecovered: 0,
            TotalRecovered: 25960,
            Date: '2020-08-10T18:37:41Z',
            Premium: {}
        },
        mobility_report_data: {
            date: '2020-08-04',
            retail_and_recreation_percent_change_from_baseline: -14,
            grocery_and_pharmacy_percent_change_from_baseline: 9,
            parks_percent_change_from_baseline: -2,
            transit_stations_percent_change_from_baseline: -7,
            workplaces_percent_change_from_baseline: -26,
            residential_percent_change_from_baseline: 5
        },
        government_response_data: {
            policies: {
                date_last_updated: '2020-08-03',
                c1_school_closing: 3,
                c2_workplace_closing: 3,
                c3_cancel_public_events: 2,
                c4_restrictions_on_gatherings: 4,
                c5_close_public_transport: 2,
                c6_stay_at_home_requirements: 2,
                c7_restrictions_on_internal_movement: 2,
                c8_international_travel_controls: 1,
                e1_income_support: 0,
                e2_debt_contract_relief: 0,
                e3_fiscal_measures: 0,
                e4_international_support: 0,
                h1_public_information_campaigns: 2,
                h2_testing_policy: 1,
                h3_contact_tracing: 1,
                h4_emergency_investment_in_healthcare: 0,
                h5_investment_in_vaccines: 0
            },
            stringency: {
                index: 78.7,
                date_last_updated: '2020-08-09'
            }
        }
    }
}

export default sampleData
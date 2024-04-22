import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import { useLocation } from 'react-router-dom';
import companyService from '../services/companyService';
import Button from '../components/elements/Button';
import toast from 'react-hot-toast';
import { formatCompanyData } from '../helpers/formatCompanyData';

const CompanyDetail = () => {
    const location = useLocation();
    const [companyData, setCompanyData] = useState(null);
    const [visibleItemCount, setVisibleItemCount] = useState(6);

    const removeEmptyStrings = async (object) => {
    const cleanedObject = { ...object };

    for (const key in cleanedObject) {
        if (cleanedObject.hasOwnProperty(key)) {
            if (cleanedObject[key] === "") {
                delete cleanedObject[key];
            }
            else if (typeof cleanedObject[key] === "object" && cleanedObject[key] !== null) {
                cleanedObject[key] = removeEmptyStrings(cleanedObject[key]);
            };
        };
    };
        return cleanedObject;
    };
  
    useEffect(() => {
        const fetchData = async () => {
            // if (location && location.search) {
                const searchParams = new URLSearchParams(location.search);
                const dossierNumber = searchParams.get('dossierNumber');
                // const company = await companyService.getCompany(dossierNumber);

                const company = {
                    annual_financial_statement_summary: {
                        assets: {
                            amount: 867308,
                            currency: "EUR",
                            formatted: "EUR 867.308,00",
                        },
                        year: 2022,
                    },
                    authorized_share_capital: 0,
                    authorized_share_capital_currency: "EUR",
                    chamber_number: "08",
                    class_personnel: 5,
                    class_personnel_ci: 1,
                    class_personnel_fulltime: 5,
                    contact_gender: "",
                    contact_initials: "",
                    contact_prefix: "",
                    contact_surname: "",
                    contact_title1: "",
                    contact_title2: "",
                    correspondence_address: {
                        formatted: {
                            city: "Apeldoorn",
                            country: "NLD",
                            house_number: 300,
                            house_number_addition: "",
                            postcode: "7311VV",
                            street: "Vosselmanstraat",
                        },
                        official: {
                            city: "Apeldoorn",
                            country: "Nederland",
                            house_number: 300,
                            house_number_addition: "",
                            postcode: "7311VV",
                            street: "Vosselmanstraat",
                        },
                        original: {
                            city: "APELDOORN",
                            country: "NLD",
                            house_number: 300,
                            house_number_addition: "",
                            postcode: "7311VV",
                            street: "Vosselmanstraat",
                        },
                    },
                    domain_name: "www.brightdigital.nl",
                    dossier_number: "62801406",
                    establishment_address: {
                        formatted: {
                            city: "Apeldoorn",
                            country: "NLD",
                            house_number: 300,
                            house_number_addition: "",
                            postcode: "7311VV",
                            street: "Vosselmanstraat",
                        },
                        official: {
                            city: "Apeldoorn",
                            country: "Nederland",
                            house_number: 300,
                            house_number_addition: "",
                            postcode: "7311VV",
                            street: "Vosselmanstraat",
                        },
                        original: {
                            city: "APELDOORN",
                            country: "NLD",
                            house_number: 300,
                            house_number_addition: "",
                            postcode: "7311VV",
                            street: "Vosselmanstraat",
                        },
                    },
                    establishment_date: {
                        day: 5,
                        month: 3,
                        year: 2015,
                    },
                    establishment_number: "000031778321",
                    founding_date: {
                        day: 5,
                        month: 3,
                        year: 2015,
                    },
                    indication_bankruptcy: false,
                    indication_dip: false,
                    indication_economically_active: true,
                    indication_export: false,
                    indication_import: false,
                    indication_main_establishment: true,
                    indication_non_mailing: true,
                    indication_organisation_code: "O",
                    issued_share_capital: 1000,
                    issued_share_capital_currency: "EUR",
                    legal_form_code: "41",
                    legal_form_text: "Besloten Vennootschap met gewone structuur",
                    legal_name: "Bright Digital B.V.",
                    main_establishment_number: "000031778321",
                    mobile_number: "06 43218079",
                    paid_up_share_capital: 1000,
                    paid_up_share_capital_currency: "EUR",
                    personnel: 16,
                    personnel_ci: 0,
                    personnel_ci_reference_date: {
                        day: 0,
                        month: 0,
                        year: 2022,
                    },
                    personnel_fulltime: 15,
                    personnel_reference_date: {
                        day: 1,
                        month: 11,
                        year: 2018,
                    },
                    primary_sbi_code: "7311",
                    primary_sbi_code_text: "Reclamebureaus",
                    rsin_number: "854962657",
                    sbi_collection: {
                        company_info: {
                            item: [
                                { sbi_code: "70221", description: "Organisatie-adviesbureaus" },
                                { sbi_code: "6201", description: "Ontwikkelen, produceren en uitgeven van software" },
                                { sbi_code: "6202", description: "Advisering op het gebied van informatietechnologie" },
                                { sbi_code: "7320", description: "Markt- en opinieonderzoekbureaus" },
                            ],
                        },
                        original: {
                            item: [
                                { sbi_code: "7311", description: "Reclamebureaus" },
                            ],
                        },
                    },
                    secondary_sbi_code1: "",
                    secondary_sbi_code1_text: "",
                    secondary_sbi_code2: "",
                    secondary_sbi_code2_text: "",
                    structure: {
                        parent: "91231779",
                        ultimate_parent: "85840408",
                    },
                    telephone_number: "",
                    trade_name_45: "Bright Digital B.V.",
                    trade_name_full: "Bright Digital B.V.",
                    trade_names: {
                        item: [
                            "Bright",
                            "Bright Digital B.V.",
                            "Bureau Bright",
                            "Visible",
                        ],
                    },
                    update_info: {
                        date_last_update: "2022-01-30T00:00:00.000Z",
                        dossier_number: "62801406",
                        establishment_number: "000031778321",
                        update_types: {
                            item: ["Tradenames"],
                        },
                    },
                };

                const formattedData = await formatCompanyData(company);
                const cleanedData = await removeEmptyStrings(formattedData);

                if (cleanedData) {
                    setCompanyData(cleanedData);
                    console.log(cleanedData);
                } else {
                    toast.error('Not enough credits to perform this action, please contact an admin');
                }
            // }
        };
        fetchData();
    }, [location.search]);

    const formatKey = (key) => {
        return key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    };

    const handleSeeMore = () => {
        setVisibleItemCount((prevCount) => prevCount + 6);
    };

    const showSeeMoreButton = companyData && Object.keys(companyData).length > visibleItemCount;

    return (
        <div className='v-company-detail'>
            <DefaultLayout>
                <div className="v-company-detail__content-wrapper">
                  <div className="v-company-detail__breadcrumb-container u-flex">
                    <BreadCrumb />
                  </div>

                  <div className="v-company-detail__content-container u-flex">

                      <div className="v-company-detail__content-container__left">
                        <h2 className='v-company-detail__title'>
                            {companyData ? companyData.trade_name_full : "No trade name found"}
                        </h2>

                        <p className='v-company-detail__text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra eros dui, et pellentesque est bibendum eget. Nullam ornare purus in turpis pharetra, eu congue.
                        </p>

                        <Button title='Save in HubSpot' style='primary' link='/' icon='ArrowRight' animation='move-right'/>
                      </div>

                      <div className="v-company-detail__content-container__right">
                        {companyData && (
                            <React.Fragment>
                                <div className="v-company-detail__identification-container">
                                    <p className='v-company-detail__identification-title'>
                                        Identification characteristics
                                    </p>

                                    <div className="v-company-detail__properties u-flex">
                                        {Object.entries(companyData)
                                            .filter(([key]) => ['dossier_number', 'rsin_number', 'establishment_number'].includes(key))
                                            .map(([key, value]) => (
                                                (typeof value === 'string' || typeof value === 'number') && (value !== null && value !== '') && (
                                                    <div key={key} className="v-company-detail__property">
                                                        <p className='v-company-detail__property-title'>{formatKey(key)}</p>
                                                        <p className='v-company-detail__property-value'>{value}</p>
                                                    </div>
                                                )
                                        ))}
                                    </div>
                                    
                                    <div className='v-company-detail__line'></div>
                                </div>

                                <div className="v-company-detail__company-info-container">
                                    <p className='v-company-detail__identification-title'>
                                        Company characteristics
                                    </p>

                                    <div className="v-company-detail__properties u-flex">
                                        {companyData &&
                                            Object.entries(companyData)
                                                .filter(([key]) => !['dossier_number', 'rsin_number', 'establishment_number'].includes(key))
                                                .slice(0, visibleItemCount)
                                                .map(([key, value]) => (
                                                    (typeof value === 'string' || typeof value === 'number') && (value !== null && value !== '') && (
                                                        <div key={key} className="v-company-detail__property">
                                                            <p className='v-company-detail__property-title'>{formatKey(key)}</p>
                                                            <p className='v-company-detail__property-value'>{value}</p>
                                                        </div>
                                                    )
                                            ))}
                                    </div>
                                </div>
                            </React.Fragment>
                        )}

                        {showSeeMoreButton && (
                            <Button
                                title="See more"
                                style="tertiary"
                                icon="ArrowDown"
                                animation="move-down"
                                onClick={handleSeeMore}
                            />
                        )}

                      </div>

                  </div>

                </div>
            </DefaultLayout>
        </div>
    );
};
export default CompanyDetail;

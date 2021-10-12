// import
import Dashboard from "views/Dashboard/Dashboard.js";
import GeneralInformation from "views/Dashboard/GeneralInformation";
import Academics from "views/Dashboard/Academics";
import ProfessionalDevelopment from "views/Dashboard/ProfessionalDevelopment";
import InternationalExposure from "views/Dashboard/InternationalExposure";
import Extracurricular from "views/Dashboard/Extracurricular";
import FacultyFeedback from "views/Dashboard/FacultyFeedback";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import GeneralInformationdata from "views/Pages/GeneralInformationdata";
import Academicsdata from "views/Pages/Academicdata";
import ProfessionalDevelopmentdata from "views/Pages/ProfessionalDevelopmentData";
import InternationalData from "views/Pages/InternationalData";
import ExtraCurricularData from "views/Pages/ExtraCurricularData";
import Feedbackdata from "views/Pages/Feedbackdata";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/GeneralInformation",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformation,
    layout: "/admin",
  },
  {
    path: "/Academics",
    name: "Academics",
    icon: <DocumentIcon color="inherit" />,
    component: Academics,
    layout: "/admin",
  },
  {
    path: "/ProfessionalDevelopment",
    name: (
      <p
        style={{
          textAlign: "left",
          lineHeight: "1.2rem",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        Professional Development
      </p>
    ),
    icon: <PersonIcon color="inherit" />,
    component: ProfessionalDevelopment,
    layout: "/admin",
  },
  {
    path: "/InternationalExposure",
    name: (
      <p
        style={{
          textAlign: "left",
          lineHeight: "1.2rem",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        International Exposure
      </p>
    ),
    icon: <RocketIcon color="inherit" />,
    component: InternationalExposure,
    layout: "/admin",
  },
  {
    path: "/Extracurricular",
    name: "Extracurricular",
    icon: <CreditIcon color="inherit" />,
    component: Extracurricular,
    layout: "/admin",
  },
  {
    path: "/FacultyFeedback",
    name: (
      <p
        style={{
          textAlign: "left",
          lineHeight: "1.2rem",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        Faculty Feedback and Analysis
      </p>
    ),
    icon: <StatsIcon color="inherit" />,
    component: FacultyFeedback,
    layout: "/admin",
  },
  {
    name: "TEST PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/GeneralInformationdata",
        name: (
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            General Information Data
          </p>
        ),
        icon: <StatsIcon color="inherit" />,
        component: GeneralInformationdata,
        layout: "/admin",
      },

      {
        path: "/Academicsdata",
        name: (
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            Academics Data
          </p>
        ),
        icon: <StatsIcon color="inherit" />,
        component: Academicsdata,
        layout: "/admin",
      },
      {
        path: "/ProfessionalDevelopmentdata",
        name: (
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            Professional Development Data
          </p>
        ),
        icon: <StatsIcon color="inherit" />,
        component: ProfessionalDevelopmentdata,
        layout: "/admin",
      },
      {
        path: "/InternationalData",
        name: (
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            International Exposure Data
          </p>
        ),
        icon: <StatsIcon color="inherit" />,
        component: InternationalData,
        layout: "/admin",
      },
      {
        path: "/ExtracurricularData",
        name: (
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            ExtraCurricular Data
          </p>
        ),
        icon: <StatsIcon color="inherit" />,
        component: ExtraCurricularData,
        layout: "/admin",
      },
      {
        path: "/Feedbackdata",
        name: (
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            Faculty Feedback and Analysis
          </p>
        ),
        icon: <StatsIcon color="inherit" />,
        component: Feedbackdata,
        layout: "/admin",
      },
    ],
  },

  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;

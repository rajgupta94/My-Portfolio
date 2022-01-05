import React from 'react'
import './resume.css'
import LineBar from '../Components/LineBar'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';
import HistoryIcon from '@mui/icons-material/History';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TaskIcon from '@mui/icons-material/Task';
import Education from '../Components/Education';
import WorkHistory from '../Components/WorkHistory';
import ProgrammingSkill from '../Components/ProgrammingSkill';
import Projects from '../Components/Projects';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Awards from '../Components/Awards';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Resume = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div id='resume' className="about-container">
                <div className="about-root">
                    <div className="about-head">
                        <h1>Resume</h1>
                        <p>My Formal Bio Details</p>
                    </div>
                    <div className="lineBar-main">
                        <LineBar />
                    </div>
                    <div className="resume-main">
                        <div className="resume-icons">
                            <div className="resume-main-icons">
                                <button><SchoolIcon /></button>
                            </div>
                            <div className="resume-main-icons">
                                <button><HistoryIcon /></button>
                            </div>
                            <div className="resume-main-icons">
                                <button><LaptopMacIcon /></button>
                            </div>
                            <div className="resume-main-icons">
                                <button><TaskIcon /></button>
                            </div>
                            <div className="resume-main-icons">
                                <button><VerifiedUserIcon /></button>
                            </div>
                        </div>
                        <Box
                            sx={{ flexGrow: 1, display: 'flex' }}
                        >
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                className='resume-tabs-root'
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            >
                                <Tab className='resume-tabs' label="Education" {...a11yProps(0)} />
                                <Tab className='resume-tabs' label="Work History" {...a11yProps(1)} />
                                <Tab className='resume-tabs' label="Programming Skills" {...a11yProps(2)} />
                                <Tab className='resume-tabs' label="Projects" {...a11yProps(3)} />
                                <Tab className='resume-tabs' label=" Award/Certicates" {...a11yProps(4)} />
                            </Tabs>
                            <TabPanel className="resume-tabpanel" value={value} index={0}>
                                <Education/>
                            </TabPanel>
                            <TabPanel className="resume-tabpanel" value={value} index={1}>
                                <WorkHistory/>
                            </TabPanel>
                            <TabPanel className="resume-tabpanel" value={value} index={2}>
                                <ProgrammingSkill/>
                            </TabPanel>
                            <TabPanel className="resume-tabpanel" value={value} index={3}>
                                <Projects/>
                            </TabPanel>
                            <TabPanel className="resume-tabpanel" value={value} index={4}>
                                <Awards/>
                            </TabPanel>

                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume

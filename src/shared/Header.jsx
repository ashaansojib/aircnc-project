import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Header = () => {
    return (
        <header className='my-container'>
            <div>
                {/* tabs area */}
                <Tabs>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </header>
    );
};

export default Header;
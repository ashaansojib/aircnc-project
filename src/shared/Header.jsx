import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Header = () => {
    return (
        <header className='my-container'>
            <div>
                {/* tabs area */}
                <Tabs>
                    <TabList>
                        <Tab><button className='py-2 px-3 rounded-sm bg-red-500'>Login</button></Tab>
                        <Tab><button className='py-2 px-3 rounded-sm bg-red-500'>Login</button></Tab>
                    </TabList>

                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum reiciendis dolore in! Itaque nobis labore eveniet, ducimus unde maiores debitis nam vel facere illum asperiores ea. Doloremque earum dolore voluptatum!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, numquam? Minus sit veniam cumque unde vel suscipit nam asperiores ullam reprehenderit corrupti, porro tempora pariatur architecto recusandae numquam, quibusdam quis!</p>
                    </TabPanel>
                </Tabs>
            </div>
        </header>
    );
};

export default Header;
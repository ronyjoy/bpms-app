import Enquiry from '../models/enquiry.model';
import logger from '../core/logger/app.logger'

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const enquiries = await Enquiry.getAll();
        logger.info('sending all Enquiries...');
        res.send(enquiries);
    }
    catch(err) {
        logger.error('Error in getting Enquiries- ' + err);
        res.send('Got error in getAll');
    }
}

controller.addEnquiry = async (req, res) => {
    let enquiry = Enquiry({
        name: req.body.name
    });
    try {
        const addedEnquiry = await Enquiry.addCar(enquiry);
        logger.info('Adding Enquiry...');
        res.send('added: ' + addedEnquiry);
    }
    catch(err) {
        res.send('Could not add Enquiry');
    }
}


export default controller;
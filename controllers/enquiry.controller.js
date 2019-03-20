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
    let enquiry = new Enquiry(req.body);
    const enq_exp_date = enquiry.enq_date.split(',');
    enquiry.enq_date = enq_exp_date[0];
    enquiry.exp_date = enq_exp_date[1];

    try {

        const addedEnquiry = await Enquiry.addEnquiry(enquiry);
        logger.info('Adding Enquiry...');
        res.send('added: ' + addedEnquiry);
    }
    catch(err) {
        res.send('Could not add Enquiry');
    }
}

controller.update = async (req, res) => {
    try {
      let enquiryId = req.params.id;
      let enquiryDetailsToUpdate = req.body;
      logger.info("updating enquiry with " + enquiryId +" enquiry details "+enquiryDetailsToUpdate);
      const enquiry = await Enquiry.update(
        enquiryId,
        enquiryDetailsToUpdate
      );
      res.send(enquiry);
    } catch (err) {
      logger.error("Error in Updating enquiry " + err);
      res.send("Got error in UPDATE");
    }
};

export default controller;
import { DialogContent, DialogHeader, DialogTitle } from '../Dashboard/dialog';
import ServiceForm from '../DashboardForms/ServiceForm';

const ServiceModal = ({ form, title, onSubmit }) => {
  return (
    <DialogContent className="sm:max-w-[525px] max-h-screen overflow-y-scroll">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <ServiceForm form={form} onSubmit={onSubmit} />
    </DialogContent>
  );
};

export default ServiceModal;

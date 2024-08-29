import ServiceDataTable from '../../components/ui/Dashboard/ServicesTable';

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <ServiceDataTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

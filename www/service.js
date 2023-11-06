export default class TicketScanService {

    constructor() {
        this.context = Scandit.DataCaptureContext.forLicenseKey('AWHjFzlFHa+fLq/kfS8GCBU/hT60NkQeVGQOWhhtRVcDZxJfsD0OY9NK0YErLuxTtTKLC1BLdrvDdsJ1dnxmcx9fDIeeaQlxawtkiq1pmEFxHOvYa3emcbAfOeiwbFPtQEWCWvdc95KoIFxAuDiYcfccdywzH2KONgwmnV9cEcX11FhIPLtX74RLua7VkOukFfNTOGExxhiCq96qZnzGgrgViuagpL0ekK6xv8K4bYt7lVkxloUMM6dFRSZ4aummJ2Q1uZNR78kSGCpCn/uJjaf/5lyNbYWpnxYvsYRPI7jOFYZykI0nIjhjt/ncukCEsz4BQLAh5hp1qocvQ2+dw3ADD8LJLXcnX7JaCOKV5cfHEHGSLR4moTxNtxPXdUNlM5w75iHZub5BsIfkJCknKrLn5oJ15k5Rx4/JnFj11tGLqtfRs+jdtXSGxAb86BxwPM1mEBO/Va1yV//CGku5UWR5MwspCf7pl8OUH7frkCtV4kDB6y5jusSMSIEGnKCLd2sWKE04mAURrpWt8pgsIB89xXPPTgPh1C+nAeMuuEN3dPYAJYrJKvy44w130JrUvxWLcTM1oFVWikC6CluLC7WGgRhZCew0eROnv9neITolB6Gmy04dlF0euA595dJcw2lLTwwxEydGp5gGIIDtofviho7JdHtPrMer/Ptz1/LOVeF55OY9eg8z1Lq2CkZf6cgWZBPa1uakuZzxWXZUprJMdTquhInmqP4ELLxGXhv+CXoT2n0p022+wyiWAXatmhvcK+n2uCWX30SL0Sri1qPmf6Ldtgqj2aFEMLM+LouJg6Ukv0PKUTXlgPW7L0vYrNGtPjvRlaR7Nwph');
        this.camera = Scandit.Camera.default;
        this.settings = new Scandit.BarcodeCaptureSettings();
        this.barcodeCapture = Scandit.BarcodeCapture.forContext(this.context, this.settings);
        this.captureView = Scandit.DataCaptureView.forContext(this.context);
        this.captureViewElement = document.querySelector('[data-scan-preview]');
        this.overlay = Scandit.BarcodeCaptureOverlay.withBarcodeCaptureForView(this.barcodeCapture, this.captureView);
        this.settings.enableSymbologies([
            Scandit.Symbology.PDF417,
        ]);
        this.settings.codeDuplicateFilter = 1000;
        this.barcodeCapture.applySettings(this.settings);
        this.barcodeCapture.addListener({
            didScan: async () => {
                this.disableCapture();
            }
        });
        this.context.setFrameSource(this.camera);
    }

    openCamera() {
        this.camera.switchToDesiredState(Scandit.FrameSourceState.On);
    }

    closeCamera() {
        this.camera.switchToDesiredState(Scandit.FrameSourceState.Off);
    }

    enableCapture() {
        this.barcodeCapture.isEnabled = true;
    }

    disableCapture() {
        this.barcodeCapture.isEnabled = false;
    }

    connectToElement() {
        this.captureViewElement.style.zIndex = '1';
        this.captureView.connectToElement(this.captureViewElement);
    }

    detachFromElement() {
        this.captureViewElement.style.zIndex = '-1';
        this.captureView.detachFromElement();
    }

    startScan() {
        this.openCamera();
        this.enableCapture();
        this.connectToElement();
    }

    stopScan() {
        this.closeCamera();
        this.disableCapture();
        this.detachFromElement();
    }
}

import logging
import router

logging.basicConfig(level=logging.INFO, format="[%(filename)s][%(levelname)s][%(asctime)s] %(message)s",
                    datefmt="%Y-%m-%d %H:%M:%S")

app = router.create_app()

def main():
    # init webui manager

    import uvicorn
    uvicorn.run("main:app",host="0.0.0.0",reload=True)

if __name__ == "__main__":
    main()